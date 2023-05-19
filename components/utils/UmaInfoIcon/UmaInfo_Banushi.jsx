import UmaInfo from "components/utils/UmaInfoIcon/UmaInfoIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

export default function UmaInfoBanushi(){
    return (
        <UmaInfo>
            <FontAwesomeIcon icon={faUserTie} />
            <div>馬主(馬主会)</div>
        </UmaInfo>
    );
}