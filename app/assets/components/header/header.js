'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './header.module.css';
import stylesGlobal from '@/app/assets/styles/global.module.css';
import Link from 'next/link';

const Header = ({ page, onMenuClick }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Função para verificar a largura da tela
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 950);
        };

        // Verifica a largura da tela ao carregar a página
        checkIsMobile();

        // Adiciona o event listener para o resize
        window.addEventListener('resize', checkIsMobile);

        // Remove o event listener quando o componente é desmontado
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return (
        <header className={styles.header}>
            <div className={stylesGlobal.container}>
                {isMobile ? (
                    <>
                        <div className={styles.menuOpen} onClick={onMenuClick}>
                            <picture>
                                <Image src="/logo.svg" width={40} height={40} className={styles.responsiveImage} />
                            </picture>
                            <span>Menu</span>
                        </div>
                        <div className={styles.title}>

                            {page === 'Home' ? (
                                <h1>EasyTools</h1>
                            ) : (
                                <span>EasyTools</span>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.image}>
                            <picture>
                                <Image src="/logo.svg" width={40} height={40} className={styles.responsiveImage} />
                            </picture>
                        </div>
                        <div className={styles.title}>
                            {page === 'Home' ? (
                                <h1>EasyTools</h1>
                            ) : (
                                <span>EasyTools</span>
                            )}
                        </div>
                    </>
                )}

                <Link href='/'>
                    <div className={styles.image}>
                        <picture>
                            <Image src="/home.svg" width={40} height={40} className={styles.responsiveImage} />
                        </picture>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;
