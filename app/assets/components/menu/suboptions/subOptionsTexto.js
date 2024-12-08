import Link from 'next/link'
import styles from './subOption.module.css'

const SubOptionsTexto = () => {

    return (
        <ul className={styles.subMenuList}>
            <li><Link href="/texto/contadordecaractere" className={styles.link}>Contador de Caractere</Link></li>
            <li><Link href="/texto/ordenarlinhas" className={styles.link}>Ordenar Linhas</Link></li>
            
        </ul>
    );
};

export default SubOptionsTexto;