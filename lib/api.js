/* 複数のページから使う見込みのある関数を定義するファイル */

// 競走馬の情報をサーバから取得する関数
export async function getKyosobaInfo(){
    try {
        const response = await fetch("http://localhost:8080/kyosoba-info-detail/1");
        const res = await response.json();
        return res;
    }catch(err){
        console.log(err);
    } 
}
