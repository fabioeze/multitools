import styles from './title.module.css';

const Title = ({texto}) => {

    return (
        <div className={styles.title}>
            <h1>{texto}</h1>
        </div>

    );
};

export default Title;