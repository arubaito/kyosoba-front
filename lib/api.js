/* 複数のページから使う見込みのある関数を定義するファイル */

// 競走馬の情報をサーバから取得する関数
export async function getKyosobaInfo(){
    try {
        const response = await fetch("http://localhost:8080/kyosoba_info_detail");
        const res = await response.json();
        return res;
    }catch(err){
        console.log(err);
    } 
}