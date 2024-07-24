import Link from 'next/link';
import stylesGlobal from '@/app/assets/styles/global.module.css';
import HeaderInsideContainer from '@/app/assets/components/headerInsideContainer/headerInsideContainer';
import styles from './content.module.css'

const Content = ({ children, texto }) => {
    return (
        <section>
            <main className={styles.main}>
                <div className={stylesGlobal.insideContainer}>
                    <HeaderInsideContainer texto={texto} />
                    {children}
                </div>
            </main>
        </section>
    );
};

export default Content;
