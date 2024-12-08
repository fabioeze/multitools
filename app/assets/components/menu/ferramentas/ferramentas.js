'use client'

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ferramentas.module.css';
import stylesGlobal from '@/app/assets/styles/global.module.css';
import HeaderInsideContainer from '@/app/assets/components/headerInsideContainer/headerInsideContainer';

import Option from '@/app/assets/components/menu/options/options';

import SubOptionsImagens from '@/app/assets/components/menu/suboptions/subOptionsImagens';
import SubOptionsMatematica from '@/app/assets/components/menu/suboptions/subOptionsMatematica';
import SubOptionsTexto from '@/app/assets/components/menu/suboptions/subOptionsTexto';
import SubOptionsCriptografia from '@/app/assets/components/menu/suboptions/subOptionsCriptografia';
import SubOptionsProgramacao from '@/app/assets/components/menu/suboptions/subOptionsProgramacao';
import SubOptionsGeradores from '@/app/assets/components/menu/suboptions/subOptionsGeradores';

const Ferramentas = ({ menuOpen }) => {
    const [menuStatus, setMenuStatus] = useState(false);
    const [activeOption, setActiveOption] = useState(null);

    useEffect(() => {
        setMenuStatus(menuOpen);
    }, [menuOpen]);

    const handleOptionClick = (index) => {
        // Toggle submenu: close if the same option is clicked again
        setActiveOption((prev) => (prev === index ? null : index));
    };

    const renderSubmenu = (index) => {
        switch (index) {
            case 0:
                return <SubOptionsMatematica />;
            case 1:
                return <SubOptionsImagens />;
            case 2:
                return <SubOptionsCriptografia />;
            case 3:
                return <SubOptionsProgramacao />;
            case 4:
                return <SubOptionsTexto />;
            case 5:
                return <SubOptionsGeradores />;
            default:
                return null;
        }
    };

    return (
        <section className={`${styles.mainFerramentas} ${menuStatus ? styles.menuOpen : ''}`}>
            <aside>
                <div className={stylesGlobal.insideContainer}>
                    <HeaderInsideContainer texto="FERRAMENTAS" />
                    <nav className={styles.navegation}>
                        <ul className={styles.sidemenu}>
                            {[
                                "Matemática",
                                "Imagens",
                                "Criptografia",
                                "Programação",
                                "Ferramentas de Texto",
                                "Geradores",
                            ].map((texto, index) => (
                                <Option
                                    key={index}
                                    texto={texto}
                                    onClick={() => handleOptionClick(index)}
                                    isVisible={activeOption === null || activeOption === index}
                                >
                                    {activeOption === index && renderSubmenu(index)}
                                </Option>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>
        </section>
    );
};

Ferramentas.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
};

export default Ferramentas;
