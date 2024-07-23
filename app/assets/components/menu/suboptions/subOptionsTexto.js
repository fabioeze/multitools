import Link from 'next/link'
import styles from './subOption.module.css'

const SubOptionsTexto = () => {

    return (
        <ul>
            <li><Link href="/texto/contadordecaractere" className={styles.link}>Contador de Caractere</Link></li>
            </ul>    );
};

export default SubOptionsTexto;