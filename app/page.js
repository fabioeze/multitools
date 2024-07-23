import Layout from "@/app/assets/components/layout/layout";
import Content from "@/app/assets/components/content/content";
import HomeContent from "@/app/assets/home/homeContent";

export default function Home() {
    return (
        <div>
            <Layout page='Home'>
                <Content texto="Página Inicial">
                    <HomeContent />
                </Content>
            </Layout>
        </div>
    );
}