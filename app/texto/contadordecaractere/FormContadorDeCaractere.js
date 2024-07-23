"use client"
import { useState } from 'react';

export default function FormContadorDeCaractere() {
    const [text, setText] = useState('');
    const [quantidadeCaractere, setQuantidadeCaractere] = useState(0);
    const [quantidadePalavras, setQuantidadePalavras] = useState(0);
    const [quantidadeLinhas, setQuantidadeLinhas] = useState(0);
    const maxCharacters = 200000;

    const handleChange = (event) => {
        const newText = event.target.value;

        if (newText.length <= maxCharacters) {
            setText(newText);
            setQuantidadeCaractere(newText.length);
            setQuantidadePalavras(newText.trim().split(/\s+/).filter(Boolean).length);
            setQuantidadeLinhas(newText.split('\n').length);
        }
    }

    return (
        <section>
            <form>
                <textarea value={text} onChange={handleChange}></textarea>
                <div>
                    <ul>
                        <li>Quantidade de Caracteres: {quantidadeCaractere}/{maxCharacters}</li>
                        <li>Quantidade de Palavras: {quantidadePalavras}</li>
                        <li>Quantidade de Linhas: {quantidadeLinhas}</li>
                    </ul>
                </div>
            </form>
        </section>
    );
}
