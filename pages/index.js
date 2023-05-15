import Modal from "@/components/modal";
import { useState } from "react";

export default function Home() {

  // state変数でモーダルウィンドウの表示非表示を切り替える
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Click</button>
      <Modal show={show} setShow={setShow}>
        <p>これがモーダルウィンドウです</p>
      </Modal>
    </>
  )
}