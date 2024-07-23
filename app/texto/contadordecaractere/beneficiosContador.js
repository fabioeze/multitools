import styles from "./contadordecaractere.module.css";

export default function BeneficiosContador() {

    return (
        <section className={styles.textoContador}>
            <div>
                <h3>Sobre o Contador de Caracteres</h3>
                <p>O Contador de Caracteres é uma ferramenta útil para quem precisa contar o número de caracteres em um texto. Seja para escrever tweets, posts em redes sociais, artigos, ou qualquer outro tipo de conteúdo, saber a contagem exata de caracteres pode ser essencial.</p>
            </div>
            <div>
                <h3>Como Usar</h3>
                <p>Para usar o contador de caracteres, basta digitar ou colar seu texto no campo acima. A contagem de caracteres e palavras será atualizada automaticamente conforme você digita.</p>
            </div>
            <div>

                <h3>Benefícios</h3>
                <ul>
                    <li>Facilita a criação de conteúdo com limites de caracteres.</li>
                    <li>Ajuda a garantir que seu texto está dentro dos limites exigidos por plataformas específicas.</li>
                    <li>Útil para escritores, estudantes, e profissionais de marketing.</li>
                </ul>
            </div>

        </section >
    );
}