import styles from '@/app/assets/home/homeContent.module.css'
import stylesGlobal from '@/app/assets/styles/global.module.css'
import Recentes from './Recentes'

export default function HomeContent() {
  return (
    <section className={stylesGlobal.content}>
      <Recentes />
    </section>
  );
}