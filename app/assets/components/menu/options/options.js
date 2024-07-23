'use client'

import Image from 'next/image';
import styles from './options.module.css'
import { useState } from 'react';

const Option = ({ texto, children }) => {
    const [imagem, setImagem] = useState('/folder.svg');
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setImagem((prevImagem) => 
            prevImagem === '/folder.svg' ? '/openFolder.svg' : '/folder.svg'
        );
        setClicked((click) => 
            click === false ? true : false
        );
    };

    return (
        <li className={styles.optionMain} onClick={handleClick}>
            <div className={styles.option}>
                <picture>
                    <Image src={imagem} width={70} height={50} alt="Icone de uma Pasta" />
                </picture>
                <span className={styles.title}>{texto}</span>
            </div>
            <div className={clicked ? styles.subOptionsActive : styles.subOptions}>
                {children}
            </div>
        </li>
    );
};

export default Option;
