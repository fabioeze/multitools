import Link from 'next/link'
import styles from './subOption.module.css'

const SubOptionsGeradores = () => {

    return (
        <ul className={styles.subMenuList}>
            <li><Link href="/geradores/geradordeloremipsum" className={styles.link}>Gerador De Lorem Ipsum</Link></li>
            <li><Link href="/geradores/geradordelinkwhatsapp" className={styles.link}>Gerador De Link do Whats</Link></li>
        </ul>
    );
};

export default SubOptionsGeradores;