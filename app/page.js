import styles from "./page.module.css";
import SideMenu from "@/app/assets/components/sidemenu/sidemenu.js"
import styleGlobal from "@/app/assets/styles/global.module.css"
import Header from "./assets/components/header/header";

export default function Home() {
  return (
    <div className={styleGlobal.container}>
    <SideMenu />
    <div className={styleGlobal.rightSide}>
        <Header />
        <main>
            <article>
              pagina home
            </article>
              </main>
          </div>
      </div>
  );
}