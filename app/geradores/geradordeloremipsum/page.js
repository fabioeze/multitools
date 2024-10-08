import FunctionGeradorLorem from './FunctionGeradorLorem'
import LayoutPatern from "@/app/assets/components/layout/layoutPatern";
import Content from "@/app/assets/components/content/content";

export default function GeradorDeLoremIpsum() {

    return (
        <>
            <LayoutPatern page='Home'>
                <Content texto="Página Inicial">
                    <FunctionGeradorLorem />
                </Content>
            </LayoutPatern>
        </>
    );
}
