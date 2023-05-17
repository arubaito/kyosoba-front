import Header from "components/common/header";
import Footer from "components/common/footer";
import Container from "./Container";
import styles from "styles/common_components/Layout.module.css"

/* 
    ページ共通のヘッダやフッタのレイアウトを表示する 
    共通の箇所なので、カスタムAPPコンポーネント(_app.js)で使用
*/
export default function Layout({children}){
    return (
        <>
            <Header />
                <div className={styles.backgroundContainer}>
                    <Container>
                        {children}
                    </Container>
                </div>
            <Footer />
        </>

    );
}