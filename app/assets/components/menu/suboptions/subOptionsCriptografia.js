import Link from 'next/link'
import styles from './subOption.module.css'

const SubOptionsCriptografia = () => {

    return (
        <ul className={styles.subMenuList}>
            <li><Link href="/" className={styles.link}>teste</Link></li>
        </ul>
    );
};

export default SubOptionsCriptografia;