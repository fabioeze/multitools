import styles from './header.module.css';
import stylesGlobal from '@/app/assets/styles/global.module.css';

import Image from 'next/image';

const Header = ({ page }) => {

    return (
        <header className={styles.header}>
            <div className={stylesGlobal.container}>
                <div className={styles.image}>
                    <picture>
                        <Image src="/logo.svg" width={40} height={40} className={styles.responsiveImage}/>
                    </picture>
                </div>
                <div className={styles.title}>
                    {page === 'Home' ? (
                        <h1>EasyTools</h1>
                    ) : (
                        <span>EasyTools</span>
                    )}
                </div>
                <div className={styles.image}>
                    <picture>
                        <Image src="/home.svg" width={40} height={40} className={styles.responsiveImage}/>
                    </picture>
                </div>
            </div>
        </header>

    );
};

export default Header;