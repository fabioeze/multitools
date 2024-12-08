import Link from 'next/link'
import styles from './subOption.module.css'

const SubOptionsMatematica = () => {

    return (
        <ul className={styles.subMenuList}>
            <li><Link href="/" className={styles.link}>teste</Link></li>
        </ul>    );
};

export default SubOptionsMatematica;