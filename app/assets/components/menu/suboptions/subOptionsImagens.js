import Link from 'next/link'
import styles from './subOption.module.css'

const SubOptionsImagens = () => {

    return (
        <ul>
            <li><Link href="/" className={styles.link}>teste</Link></li>
        </ul>
    );
};

export default SubOptionsImagens;