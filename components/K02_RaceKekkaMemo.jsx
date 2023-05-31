import { useState } from "react";
import styles from "styles/page/K02_RaceKekkaMemo.module.css";

/**
 * レースに対するメモを記入するコンポーネント
 * 
 * 入力フォームの参考⇒https://reffect.co.jp/react/react-hook-form 
 */
export default function RaceKekkaMemo(){
  
    // useStateを使って入力フォームを管理
    const [raceKekkaMemo, setRaceKekkaMemo] = useState(""); // 初期値 
    const raceZisshiId = 1; // POST送信するレースを識別するID

    // 入力欄が更新されたらstate値を更新
    const handleChangeRaceKekkaMemo = (e) => {
        setRaceKekkaMemo(e.target.value);
    };

    // 入力フォームをsubmitした時の関数
    const handleSubmit = async (e) => {
        
        e.preventDefault();
        console.log({
            raceZisshiId, 
            raceKekkaMemo
        });

        // 登録・更新用のAPI呼び出し
        const response = await fetch("http://localhost:8080/register-race-kekka-memo",{ 
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                raceZisshiId, 
                raceKekkaMemo
            }),
        });

        if(response.status === 200){
            alert("保存しました。");
        } else {
            alert("保存できませんでした。管理者にご連絡ください。");
        }
    }

    return (
        <div className={styles.raceMemoArea}>
            <h3>レースメモ</h3>
            <form onSubmit={handleSubmit}>
                <textarea 
                    className={styles.textArea} 
                    name="raceKekkaMemo"
                    rows="8"
                    value={raceKekkaMemo}
                    onChange={handleChangeRaceKekkaMemo}
                />
                <button type="submit">保存</button>
            </form>
        </div>
    );
}