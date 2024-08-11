import LayoutPatern from "@/app/assets/components/layout/layoutPatern";
import Content from "@/app/assets/components/content/content";
import FunctionOrdenarLinhas from "./FunctionOrdenarLinhas";

export default function ContadorDeCaractere() {
    return (
        <>
            <LayoutPatern page='Ordenar Linhas'>
                <Content texto="Ordenar Linhas">
                    <FunctionOrdenarLinhas />
                </Content>
            </LayoutPatern>
        </>
    );
}