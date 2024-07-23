import Link from 'next/link'
import styles from './subOption.module.css'

const SubOptionsTexto = () => {

    return (
        <ul>
            <li><Link href="/" className={styles.link}>teste</Link></li>
            </ul>    );
};

export default SubOptionsTexto;