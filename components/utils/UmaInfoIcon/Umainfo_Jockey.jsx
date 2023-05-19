import UmaInfo from "components/utils/UmaInfoIcon/UmaInfoIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTshirt } from "@fortawesome/free-solid-svg-icons";

export default function UmaInfoJockey(){
    return (
        <UmaInfo>
            <FontAwesomeIcon icon={faTshirt} />
            <div>主な鞍上</div>
        </UmaInfo>
    );
}