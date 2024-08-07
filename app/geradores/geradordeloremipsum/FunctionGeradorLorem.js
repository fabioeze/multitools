'use client'

import React, { useState } from 'react';
import styles from "./geradordeloremipsum.module.css";
import styleGlobal from "@/app/assets/styles/global.module.css";

const loremPhrases = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
];

const generateLoremIpsum = (paragraphs) => {
    let loremIpsum = [];
    for (let i = 0; i < paragraphs; i++) {
        const paragraph = loremPhrases.sort(() => 0.5 - Math.random()).slice(0, 5).join(' ');
        loremIpsum.push(paragraph);
    }
    return loremIpsum.join('\n\n');
}

const FunctionGeradorLorem = () => {
    const [paragraphs, setParagraphs] = useState(1);
    const [loremIpsum, setLoremIpsum] = useState(generateLoremIpsum(paragraphs));
    const [copied, setCopied] = useState(false);
    const [sucesso, setSucesso] = useState('');

    const handleGenerate = () => {
        setLoremIpsum(generateLoremIpsum(paragraphs));
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(loremIpsum).then(() => {
            setCopied(true);
            setSucesso('Copiado com sucesso!');
            setTimeout(() => {
                setCopied(false);
                setSucesso('');
            }, 4000); // Remove the copied state after 2 seconds
        }, (err) => {
            console.error('Erro ao copiar o texto: ', err);
        });
    };

    return (
        <section className={styles.mainGerador}>
            <div className={styles.handleContent}>
                <div>
                    <p>Número de parágrafos:</p>
                    <input
                        type="number"
                        value={paragraphs}
                        onChange={(e) => setParagraphs(Number(e.target.value))}
                    />
                    <button onClick={handleGenerate}>Gerar</button>
                </div>
                <div className={styles.loremTextArea}>
                    <textarea value={loremIpsum} readOnly></textarea>
                    <button onClick={handleCopy} className={copied ? styles.copiado : ''}>Copiar</button>
                    <span>{sucesso}</span>
                </div>
            </div>
        </section>
    );
};

export default FunctionGeradorLorem;