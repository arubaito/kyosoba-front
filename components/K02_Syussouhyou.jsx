import styles from "styles/page/K02_Syussouhyou.module.css";


export default function Syussouhyou({raceKekkaList}){
    return (
        <table className={styles.table}>
            {/* テーブルのヘッダ */}
            <thead>
                <tr className={styles.header}>
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
            {/* 各レコードを生成 */}
            {raceKekkaList.map(({
                tyakuzyun, waku, umaban, yosou, bamei, seirei, kisyu, ninki
            }) => {
                return(
                    <tr key={umaban}>
                        <td className={styles.tyakuzyun}>{tyakuzyun}</td>
                        <td className={`${styles.waku} ${
                            (waku == 1) ? styles.waku :
                            (waku == 2) ? styles.waku2 :
                            (waku == 3) ? styles.waku3 :
                            (waku == 4) ? styles.waku4 :
                            (waku == 5) ? styles.waku5 :
                            (waku == 6) ? styles.waku6 :
                            (waku == 7) ? styles.waku7 :
                            styles.waku8                        
                        }`}>
                        {waku}</td>
                        <td className={styles.umaban}>{umaban}</td>
                        <td className={styles.yosou}>{yosou}</td>
                        <td className={styles.bamei}>{bamei}</td>
                        <td className={styles.seirei}>{seirei}</td>
                        <td className={styles.kisyu}>{kisyu}</td>
                        <td className={styles.ninki}>{ninki}</td>
                    </tr>
                )
        })}
        </tbody>
    );
}
