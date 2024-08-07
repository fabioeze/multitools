import Link from "next/link";
import CriaLinkImagem from './criaLinkImagem/CriaLinkImagem'

export default function Recentes() {
  return (
    <section>
      <nav>
        <CriaLinkImagem link='/texto/contadordecaractere' texto='Contador de Caracteres' />
        <CriaLinkImagem link='/geradores/geradordeloremipsum' texto='Gerador de Lorem Ipgum' />
        <CriaLinkImagem link='/geradores/geradordelinkwhatsapp' texto='Gerador de Link do Whats' />
        <CriaLinkImagem link='/texto/contadordecaractere' texto='texto 4' />
        <CriaLinkImagem link='/texto/contadordecaractere' texto='texto 4' />
        <CriaLinkImagem link='/texto/contadordecaractere' texto='texto 4' />
      </nav>
    </section>
  );
}