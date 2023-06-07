import Ichiran from "components/K01_ichiran";
import Kettouhyou from "components/K01_kettouhyou";
import TitleAndIcon from "components/common/titleAndIcon";
import Modal from "components/modal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHorseHead } from "@fortawesome/free-solid-svg-icons";
import styles from "styles/page/K01_KyosobaIchiran.module.css"

/**
 * (K01)競走馬一覧ページ
 */
export default function KyosobaIchiran() {

  // state変数でモーダルウィンドウの表示非表示を切り替える
  const [show, setShow] = useState(false);

  return (
      <div className={styles.kyousoubaIchiranContentsBox}>
        <TitleAndIcon title="競走馬一覧">
          <FontAwesomeIcon icon={faHorseHead} />
        </TitleAndIcon>
        {/* 競走馬の一覧 */}
        <Ichiran setShow={setShow}></Ichiran>

        {/* モーダルウィンドウを配置(childrenが表示される中身) */}
        <Modal show={show} setShow={setShow}>
          <Kettouhyou /> 
        </Modal>
      </div>
  )
}