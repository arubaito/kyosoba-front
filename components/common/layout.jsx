import Header from "components/common/header";
import Footer from "components/common/footer";
import Container from "./Container";

/* 
    ページ共通のヘッダやフッタのレイアウトを表示する 
    共通の箇所なので、カスタムAPPコンポーネント(_app.js)で使用
*/
export default function Layout({children}){
    return (
        <>
            <Header />
                <Container>
                    {children}
                </Container>
            <Footer />
        </>

    );
}