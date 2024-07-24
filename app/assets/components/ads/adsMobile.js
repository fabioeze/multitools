import Link from 'next/link';
import stylesGlobal from '@/app/assets/styles/global.module.css';
import HeaderInsideContainer from '@/app/assets/components/headerInsideContainer/headerInsideContainer';
import styles from './ads.module.css'

const AdsMobile = () => {
    return (
        <section>
            <div className={styles.adsMobile}>
                <span>teste</span>
            </div>
        </section>
    );
};

export default AdsMobile;
