import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface NewsAlertProps {
    url?: any;
    text: string;
}

const NewsAlert = (props: NewsAlertProps) => {
    return (
        <Link to={props.url ? props.url : ''}>
            <div>
                {props.text}
                <div>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </Link>
    );
}

export default NewsAlert;