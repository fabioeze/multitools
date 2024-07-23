import LayoutPatern from "@/app/assets/components/layout/layoutPatern";
import Content from "@/app/assets/components/content/content";
import HomeContent from "@/app/assets/home/homeContent";

export default function Home() {
    return (
        <>
            <LayoutPatern page='Home'>
                <Content texto="Página Inicial">
                    <HomeContent />
                </Content>
            </LayoutPatern>
        </>
    );
}