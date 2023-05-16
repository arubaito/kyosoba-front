import Container from "./Container";
import Logo from "./logo";
import Nav from "./nav";
import styles from "styles/common_components/header.module.css";

/* ページ共通のヘッダ */
export default function Header(){
    return (
        <header>
            <Container>
                <div className={styles.flexContainer}>
                    <Logo boxOn/>
                    <Nav />
                </div>
            </Container>
        </header>
    );
}