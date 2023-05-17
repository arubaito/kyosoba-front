import styles from "styles/kettouhyou.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";

/* 
    血統表を表示するコンポーネント
 */
export default function Kettouhyou() {
    return (
        <>
            <h2 className={styles.title}>
                <FontAwesomeIcon icon={faVenusMars} /> 血統表
            </h2>
            <table className={styles.table}>
                <tbody>
                    {/* 父方 */}
                    <tr>
                        <td rowSpan="8">エピファネイア</td>
                        <td rowSpan="4">シンボリクリスエス</td>
                        <td rowSpan="2">Kris.S</td>
                        <td>Roberto</td>
                    </tr>
                    <tr>
                        <td>Sharp Queen</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">Tee Kay</td>
                        <td>Gold Meridian</td>
                    </tr>
                    <tr>
                        <td>Tri Argo</td>
                    </tr>
                    <tr>
                        <td rowSpan="4">シーザリオ</td>
                        <td rowSpan="2">スペシャルウィーク</td>
                        <td>サンデーサイレンス</td>
                    </tr>
                    <tr>
                        <td>キャンペーンガール</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">キロフプリミエール</td>
                        <td>Sadler's Wells</td>
                    </tr>
                    <tr>
                        <td>Querida</td>
                    </tr>
                    {/* 母方 */}
                    <tr>
                        <td rowSpan="8">エピファネイア</td>
                        <td rowSpan="4">シンボリクリスエス</td>
                        <td rowSpan="2">Kris.S</td>
                        <td>Roberto</td>
                    </tr>
                    <tr>
                        <td>Sharp Queen</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">Tee Kay</td>
                        <td>Gold Meridian</td>
                    </tr>
                    <tr>
                        <td>Tri Argo</td>
                    </tr>
                    <tr>
                        <td rowSpan="4">シーザリオ</td>
                        <td rowSpan="2">スペシャルウィーク</td>
                        <td>サンデーサイレンス</td>
                    </tr>
                    <tr>
                        <td>キャンペーンガール</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">キロフプリミエール</td>
                        <td>Sadler's Wells</td>
                    </tr>
                    <tr>
                        <td>Querida</td>
                    </tr>
                </tbody>

            </table>
        </>

    );
}