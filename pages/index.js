import Ichiran from "components/K01_ichiran";
import Kettouhyou from "components/K01_kettouhyou";
import Modal from "components/modal";
import { useState } from "react";

export default function Home() {

  // state変数でモーダルウィンドウの表示非表示を切り替える
  const [show, setShow] = useState(false);

  return (
      <div>
        {/* 競走馬の一覧 */}
        <Ichiran setShow={setShow}></Ichiran>

        {/* モーダルウィンドウを配置(childrenが表示される中身) */}
        <Modal show={show} setShow={setShow}>
          <Kettouhyou /> 
        </Modal>
      </div>
  )
}