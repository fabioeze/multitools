'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
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

const Ferramentas = ({ menuOpen }) => {
    const [menuStatus, setMenuStatus] = useState(false);

    useEffect(() => {
        setMenuStatus(menuOpen);
    }, [menuOpen]);

    return (
        <section className={`${styles.mainFerramentas} ${menuStatus ? styles.menuOpen : ''}`}>
            <aside>
                <div className={stylesGlobal.insideContainer}>
                    <HeaderInsideContainer texto="FERRAMENTAS" />
                    <nav className={styles.navegation}>
                        <ul className={styles.sidemenu}>
                            <Option texto="Matemática" link="/matematica">
                                <SubOptionsMatematica />
                            </Option>
                            <Option texto="Imagens" link="/imagens">
                                <SubOptionsImagens />
                            </Option>
                            <Option texto="Criptografia" link="/criptografia">
                                <SubOptionsCriptografia />
                            </Option>
                            <Option texto="Programação" link="/programacao">
                                <SubOptionsProgramacao />
                            </Option>
                            <Option texto="Ferramentas de Texto" link="/texto">
                                <SubOptionsTexto />
                            </Option>
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