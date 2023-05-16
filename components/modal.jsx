import styles from "styles/modal.module.css"

/* 
    汎用モーダルウィンドウ
    ※ 利用側でstate変数を定義してコンポーネントのpropsへ渡す
    show : モーダルウィンドウを開閉するstate変数
    setShow : state変数を更新する関数
    children : モーダルウィンドウで表示する中身
    @see https://reffect.co.jp/react/react-modal
 */
export default function Modal({show=false, setShow, children}){
    
    // モーダルウィンドウを閉じる関数
    const closeModal = () => setShow(false);
    
    // モーダルウィンドウの表示非表示を変数showで切り替え
    if(show){
        return (
            <div>
                <div className={styles.overlay} onClick={closeModal}>
                <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                    {children}
                    <p><button onClick={closeModal}>close</button></p>
                </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}