import Link from 'next/link';
import stylesGlobal from '@/app/assets/styles/global.module.css';
import HeaderInsideContainer from '@/app/assets/components/headerInsideContainer/headerInsideContainer';
import styles from './ads.module.css'

const Ads = ({ children, texto }) => {
    return (
        <div className={styles.adsContainer}>
            <span>teste</span>
        </div>
    );
};

export default Ads;
