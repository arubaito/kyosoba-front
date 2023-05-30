import styles from "styles/page/K02_Syussouhyou.module.css";


export default function Syussouhyou({raceKekkaList}){
    return (
        <table className={styles.table}>
            {/* テーブルのヘッダ */}
            <thead>
                <tr>
                    <td>着順</td>
                    <td>枠</td>
                    <td>馬番</td>
                    <td>予想</td>
                    <td>馬名</td>
                    <td>性齢</td>
                    <td>騎手</td>
                    <td>人気</td>
                </tr>
            </thead>
            <RaceKekkaTableBody raceKekkaList={raceKekkaList} />
        </table>
    );
}

/**
 * 
 * @param APIから送られてくるレースに出走した馬とその結果のリスト 
 * @returns <tr>でマークアップされた各要素
 */
function RaceKekkaTableBody({raceKekkaList}){
    return (
        <tbody>
            {/* リストを<tr>でマークアップ */}
            {raceKekkaList.map(({
                tyakuzyun, waku, umaban, yosou, bamei, seirei, kisyu, ninki
            }) => (
                <tr>
                    <td>{tyakuzyun}</td>
                    <td>{waku}</td>
                    <td>{umaban}</td>
                    <td>{yosou}</td>
                    <td>{bamei}</td>
                    <td>{seirei}</td>
                    <td>{kisyu}</td>
                    <td>{ninki}</td>
                </tr>
            ))}
        </tbody>
    );
}
