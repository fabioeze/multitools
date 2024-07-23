import LayoutPatern from "@/app/assets/components/layout/layoutPatern";
import Content from "@/app/assets/components/content/content";
import FunctionContadorDeCaractere from "./FunctionContadorDeCaractere";

export default function ContadorDeCaractere() {
    return (
        <>
            <LayoutPatern page='Contador de Caractere'>
                <Content texto="Contador de Caractere">
                    <FunctionContadorDeCaractere />
                </Content>
            </LayoutPatern>
        </>
    );
}