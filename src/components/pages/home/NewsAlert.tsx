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
            <div className="transition-all duration-300 ease-in-out hover:bg-secondary/40 hover:shadow-news-alert bg-secondary/30 inline-block text-white font-ben font-semibold text-sm p-2 rounded-full mb-4">
                <span className="leading-6 pl-2.5">{props.text}</span>
                <div className="text-secondary bg-white text-center inline-block float-right rounded-full w-6 h-6 leading-6 ml-12">
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </Link>
    );
}

export default NewsAlert;