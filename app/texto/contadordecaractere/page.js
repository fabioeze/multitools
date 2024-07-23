import styles from "./contadordecaractere.module.css";
import SideMenu from "@/app/assets/components/sidemenu/sidemenu.js"
import Header from "@/app/assets/components/header/header.js"
import Title from "@/app/assets/components/title/title.js"
import FormContador from './formContador'
import styleGlobal from '@/app/assets/styles/global.module.css'
import SobreContador from './sobreContador.js'
import BeneficiosContador from './beneficiosContador.js'

export default function ContadorDeCaractere() {
    return (
        <div className={styleGlobal.container}>
            <SideMenu />
            <div className={styleGlobal.rightSide}>
                <Header />
                <main>
                    <article>
                        <Title texto="Contador de Caractere" />
                        <FormContador />

                        <section className={styles.contentWrapper}>
                                <SobreContador />
                                <BeneficiosContador />
                        </section>
                    </article>
                </main>
            </div>
        </div>
    );
}
