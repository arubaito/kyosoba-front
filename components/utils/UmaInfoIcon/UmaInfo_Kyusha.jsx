import UmaInfo from "components/utils/UmaInfoIcon/UmaInfoIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function UmaInfoKyusha(){
    return (
        <UmaInfo>
            <FontAwesomeIcon icon={faHouse} />
            <div>厩舎</div>
        </UmaInfo>
    );
}