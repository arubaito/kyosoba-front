import Container from "./Container";
import Logo from "./logo";
import styles from "styles/common_components/footer.module.css"

/* 
    ページ共通のフッタ
 */
export default function Footer(){
    return (
        <footer className={styles.wrapper}>
            <Container>
                <div className={styles.flexContainer}>
                    <Logo />
                </div>
            </Container>
        </footer>
    );
}