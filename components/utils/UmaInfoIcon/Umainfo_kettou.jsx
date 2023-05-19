import UmaInfo from "components/utils/UmaInfoIcon/UmaInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";

export default function UmaInfoKettou(){
    return (
        <UmaInfo>
            <FontAwesomeIcon icon={faVenusMars} />
            <div>血統</div>
        </UmaInfo>
    );
}