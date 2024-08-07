import FunctionGeradorWhats from './FunctionGeradorWhats'
import LayoutPatern from "@/app/assets/components/layout/layoutPatern";
import Content from "@/app/assets/components/content/content";

export default function GeradorDeLoremIpsum() {

    return (
        <>
            <LayoutPatern page='Gerador de Link do WhatsApp'>
                <Content texto="Gerador de Link do WhatsApp">
                    <FunctionGeradorWhats />
                </Content>
            </LayoutPatern>
        </>
    );
}
