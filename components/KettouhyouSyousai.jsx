import styles from "styles/KettouhyouSyousai.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";

/* 
    血統表を表示するコンポーネント
 */
export default function KettouhyouSyousai({sosen}) {
    return (
        <>
            <table className={styles.table}>
                <tbody>
                    {/* 父方 */}
                    <tr>
                        <td rowSpan="16">{sosen.fatherName}</td>
                        <td rowSpan="8">{sosen.fathersFatherName}</td>
                        <td rowSpan="4">{sosen.fathersFathersFatherName}</td>
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
                        <td rowSpan="4">{sosen.fathersFathersMatherName}</td>
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
                        <td rowSpan="8">{sosen.fathersMatherName}</td>
                        <td rowSpan="4">{sosen.fathersMathersFatherName}</td>
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
                        <td rowSpan="4">{sosen.fathersMathersMatherName}</td>
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
                        <td rowSpan="16">{sosen.matherName}</td>
                        <td rowSpan="8">{sosen.mathersFatherName}</td>
                        <td rowSpan="4">{sosen.mathersFathersFatherName}</td>
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
                        <td rowSpan="4">{sosen.mathersFathersMatherName}</td>
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
                        <td rowSpan="8">{sosen.mathersMatherName}</td>
                        <td rowSpan="4">{sosen.mathersMathersFatherName}</td>
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
                        <td rowSpan="4">{sosen.mathersMathersMatherName}</td>
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