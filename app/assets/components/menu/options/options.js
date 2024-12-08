'use client'

import Image from 'next/image';
import styles from './options.module.css'
import { useState } from 'react';

const Option = ({ texto, onClick, children, isVisible }) => {
    const [imagem, setImagem] = useState('/folder.svg');

    const handleClick = () => {
        setImagem((prevImagem) => 
            prevImagem === '/folder.svg' ? '/openFolder.svg' : '/folder.svg'
        );
        if (onClick) {
            onClick(); // Acione a função passada pelo componente pai
        }
    };

    return (
        <li
            className={`${styles.optionMain} ${!isVisible ? styles.hidden : ''}`}
            onClick={handleClick}
        >
            <div className={styles.option}>
                <picture>
                    <Image src={imagem} width={70} height={50} alt="Icone de uma Pasta" className={styles.responsiveImage} />
                </picture>
                <span className={styles.title}>{texto}</span>
            </div>
            {children}
        </li>
    );
};

export default Option;
