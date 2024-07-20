import Link from 'next/link';
import styles from './sideMenu.module.css';
import Image from 'next/image';

const SideMenu = () => {

    return (
        <aside className={styles.menu}>
            <div className={styles.logo}>
                <Image src='' alt='logo' width={192} height={32} />
            </div>
            <nav className={styles.navegation}>
                <ul className={styles.sidemenu}>
                    <li>
                        <Link href='/'>Matematica</Link>
                        <ul className={styles.submenu}>
                            <li><Link href='/matematica/percentual'>porcentagem</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href='/'>Imagens</Link>
                    </li>
                    <li>
                        <Link href='/'>Criptografia</Link>
                    </li>
                    <li>
                        <Link href="#">Programação</Link>
                    </li>
                    <li>
                        <Link href="#">Geral</Link>
                        <ul className={styles.submenu}>
                            <li><Link href='/geral/contadordecaractere'>Contador De Caractere</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default SideMenu;