'use client'

import { useState, useEffect } from 'react';
import styles from './layout.module.css';
import Header from '../header/header';
import Ferramentas from '../menu/ferramentas/ferramentas';
import stylesGlobal from '@/app/assets/styles/global.module.css';
import Ads from '@/app/assets/components/ads/ads';
import PropTypes from 'prop-types';

const LayoutPatern = ({ page, children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(prevState => !prevState);
    };

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
        <div>
            <Header page={page} onMenuClick={handleMenuClick} />
            {isMobile ? (
                <div className={stylesGlobal.container}>
                    <Ferramentas menuOpen={menuOpen} />
                    {children}
                </div>
            ) : (

                <div className={stylesGlobal.container}>
                    <Ferramentas menuOpen={menuOpen} />
                    {children}
                    <Ads />
                </div>
            )}

        </div>

    );
};

LayoutPatern.propTypes = {
    page: PropTypes.any.isRequired,
    children: PropTypes.node.isRequired,
};

export default LayoutPatern;
