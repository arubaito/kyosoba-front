import styles from "styles/KettouhyouSyousai.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";

/* 
    血統表を表示するコンポーネント
 */
export default function KettouhyouSyousai() {
    return (
        <>
            <table className={styles.table}>
                <tbody>
                    {/* 父方 */}
                    <tr>
                        <td rowSpan="16">エピファネイア</td>
                        <td rowSpan="8">シンボリクリスエス</td>
                        <td rowSpan="4">Kris.S</td>
                        <td rowSpan="2">A</td>
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
                        <td>Sharp Queen</td>
                    </tr>
                    <tr>
                        <td rowSpan="4">Tee Kay</td>
                        <td rowSpan="2">Tee Kay</td>
                        <td>Tri Argo</td>
                    </tr>
                    <tr>
                        <td>Sharp Queen</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">Tee Kay</td>
                        <td>Gold Meridian</td>
                    </tr>
                    <tr>
                        <td>Sharp Queen</td>
                    </tr>

                    <tr>
                        <td rowSpan="8">シーザリオ</td>
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
                        <td rowSpan="16">エピファネイア</td>
                        <td rowSpan="8">シンボリクリスエス</td>
                        <td rowSpan="4">Kris.S</td>
                        <td rowSpan="2">A</td>
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
                        <td>Sharp Queen</td>
                    </tr>
                    <tr>
                        <td rowSpan="4">Tee Kay</td>
                        <td rowSpan="2">Tee Kay</td>
                        <td>Tri Argo</td>
                    </tr>
                    <tr>
                        <td>Sharp Queen</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">Tee Kay</td>
                        <td>Gold Meridian</td>
                    </tr>
                    <tr>
                        <td>Sharp Queen</td>
                    </tr>

                    <tr>
                        <td rowSpan="8">シーザリオ</td>
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