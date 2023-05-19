import Link from "next/link";
import styles from "styles/ichiran.module.css"
import MiruButton from "components/utils/MiruButton";
import SeireiIcon from "components/utils/SeireiIcon";

/*
    馬名の一覧を表示するコンポーネント
    とりあえずデータはハードコード
 */
export default function Ichiran({setShow}){
    
    // モーダルウィンドウをひらく関数
    const openModal = () => setShow(true);

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
                        <Link href="/horse"><div>ソダシ</div></Link>
                    </td>
                    <td>
                        <SeireiIcon>牝5</SeireiIcon>
                    </td>
                    <td>
                        <MiruButton eventHandler={openModal} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link href="/horse">シロフネ</Link>
                    </td>
                    <td>
                        <SeireiIcon>牝3</SeireiIcon>
                    </td>
                    <td>
                        <MiruButton eventHandler={openModal} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link href="/horse">ベストスピード</Link>
                    </td>
                    <td>
                        <SeireiIcon>牝4</SeireiIcon>
                    </td>
                    <td>
                        <MiruButton eventHandler={openModal} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link href="/horse">マリモダイヤモンド</Link>
                    </td>
                    <td>
                        <SeireiIcon>牝4</SeireiIcon>
                    </td>
                    <td>
                        <MiruButton eventHandler={openModal} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link href="/horse">シロフネ</Link>
                    </td>
                    <td>
                        <SeireiIcon>牝3</SeireiIcon>
                    </td>
                    <td>
                        <MiruButton eventHandler={openModal} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link href="/horse">ベストスピード</Link>
                    </td>
                    <td>
                        <SeireiIcon>牝4</SeireiIcon>
                    </td>
                    <td>
                        <MiruButton eventHandler={openModal} />
                    </td>
                </tr>
            </tbody>
        </table>
        </>
    );
}