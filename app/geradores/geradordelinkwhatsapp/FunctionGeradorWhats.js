'use client'

import React, { useState } from 'react';
import styles from "./FunctionGeradorWhats.module.css";
import styleGlobal from "@/app/assets/styles/global.module.css";

import FormGeradorWhats from './FormGeradorWhats'
import TextoGeradorWhats from './TextoGeradorWhats'
const FunctionGeradorWhats = () => {

    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [whatsappLink, setWhatsappLink] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        setWhatsappLink(link);
    };

    return (
    <section className={styleGlobal.content}>
        <FormGeradorWhats />
        <TextoGeradorWhats />
    </section>
    );
};

export default FunctionGeradorWhats;