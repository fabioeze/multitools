

import styles from "./contadordecaractere.module.css";

export default function BeneficiosContador() {

    return (
        <section className={styles.beneficiosContador}>
            <div>
                <h3>Como Usar</h3>
                <p>Para usar o contador de caracteres, basta digitar ou colar seu texto no campo acima. A contagem de caracteres e palavras será atualizada automaticamente conforme você digita.</p>
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
