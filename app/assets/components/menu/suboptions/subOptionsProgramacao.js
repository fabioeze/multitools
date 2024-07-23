import Link from 'next/link'
import styles from './subOption.module.css'

const SubOptionsProgramacao = () => {

    return (
        <ul>
            <li><Link href="/" className={styles.link}>teste</Link></li>
        </ul>    );
};

export default SubOptionsProgramacao;