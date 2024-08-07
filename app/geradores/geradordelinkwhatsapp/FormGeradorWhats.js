'use client'

import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import styles from "./FunctionGeradorWhats.module.css";
import styleGlobal from "@/app/assets/styles/global.module.css";

const FormGeradorWhats = () => {
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [whatsappLink, setWhatsappLink] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedPhone = phone.replace(/[\s()-]/g, ''); // Remove espaços, parênteses e hífens
        const link = `https://wa.me/55${formattedPhone}?text=${encodeURIComponent(message)}`;
        setWhatsappLink(link);
    };

    return (
        <section className={styles.container}>
            <p>Insira o número de telefone do seu WhatsApp e, caso deseje que seja enviado com uma mensagem, preencha o campo de mensagem.</p>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label htmlFor="phone">Número de Telefone:</label>
                    <InputMask
                        mask="(99) 9 9999-9999"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(51) 9 9911-1111"
                        required
                    >
                        {(inputProps) => <input type="tel" id="phone" {...inputProps} className={styles.input} />}
                    </InputMask>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="message">Mensagem:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={styles.textarea}
                    />
                </div>
                <button type="submit" className={styles.button}>Gerar Link</button>
            </form>
            {whatsappLink && (
                <div className={styles.result}>
                    <p>Seu link para o WhatsApp:</p>
                    <textarea value={whatsappLink} readOnly className={styles.linkTextarea}/>
                </div>
            )}
        </section>
    );
};

export default FormGeradorWhats;
