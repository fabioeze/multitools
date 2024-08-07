"use client"

import { useState } from 'react';
import styles from "./contadordecaractere.module.css";
import FormContadorDeCaractere from "./FormContadorDeCaractere";
import TextoContador from "./TextoContador";
import stylesGlobal from '@/app/assets/styles/global.module.css';

export default function FunctionContadorDeCaractere() {
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
        <section className={stylesGlobal.content}>
            <FormContadorDeCaractere/>
            <TextoContador />
        </section>
    );
}
