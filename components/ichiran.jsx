import Link from "next/link";
import styles from "styles/ichiran.module.css"

/*
    馬名の一覧を表示するコンポーネント
    とりあえずデータはハードコード
 */
export default function Ichiran({setShow}){
    return (
        <>
        <table className={styles.table}>
            <thead className={styles.header}>
                <tr>
                    <th>馬名</th>
                    <th>性齢</th>
                    <th>血統</th>
                </tr>
            </thead>
            <tbody className={styles.data}>
                <tr>
                    <td>
                        <Link href="/horse">マリモダイヤモンド</Link>
                    </td>
                    <td>牝4</td>
                    <td>
                        <button onClick={() => setShow(true)}>Click</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link href="/horse">シロフネ</Link>
                    </td>
                    <td>牝3</td>
                    <td>
                        <button onClick={() => setShow(true)}>Click</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link href="/horse">ベストスピード</Link>
                    </td>
                    <td>牝4</td>
                    <td>
                        <button onClick={() => setShow(true)}>Click</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link href="/horse">マリモダイヤモンド</Link>
                    </td>
                    <td>牝4</td>
                    <td>
                        <button onClick={() => setShow(true)}>Click</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link href="/horse">シロフネ</Link>
                    </td>
                    <td>牝3</td>
                    <td>
                        <button onClick={() => setShow(true)}>Click</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link href="/horse">ベストスピード</Link>
                    </td>
                    <td>牝4</td>
                    <td>
                        <button onClick={() => setShow(true)}>Click</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </>
    );
}