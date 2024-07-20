import styles from "./contadordecaractere.module.css";
import AdsContador from './adsContador'

export default function SobreContador() {

    return (
        <section className={styles.sobreContador}>
                <div>
                    <h2>Sobre o Contador de Caracteres</h2>
                    <p>O Contador de Caracteres é uma ferramenta útil para quem precisa contar o número de caracteres em um texto. Seja para escrever tweets, posts em redes sociais, artigos, ou qualquer outro tipo de conteúdo, saber a contagem exata de caracteres pode ser essencial.</p>
                </div>
                <AdsContador />
        </section>
    );
}
