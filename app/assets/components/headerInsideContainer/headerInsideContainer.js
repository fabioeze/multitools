import styles from './headerInsideContainer.module.css';
import Image from 'next/image'

const HeaderInsideContainer = ({ texto }) => {

    return (
        <div className={styles.headerInsideContainer}>
            <span>{texto}</span>
            <picture>
                <Image src="/actionsIcons.svg" width={40} height={10.39} />
            </picture>
        </div>

    );
};

export default HeaderInsideContainer;