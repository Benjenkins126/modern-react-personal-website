import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const GitHubLogo = require("../../../../assets/img/GitHub-Mark-Light-64px.png");

interface GitHubActivityItemProps {
    commit: String,
    repo: String,
    timestamp: String,
    status: String,
    url: String,
    lastItem: Boolean
}

const GitHubActivityItem = (props: GitHubActivityItemProps) => {
    return (
        <div className={`py-4 git-hover ${props.lastItem ? '' : 'border-b border-white/20'}`}>
            <Link to={`${props.url}`}>
                <img src={GitHubLogo} alt="GitHub Logo" draggable="false" className="inline-block w-11 relative -top-0.5" />
                <div className="inline-block pl-5 relative top-1.5">
                    <h4 className="m-0 p-0 font-ben font-bold text-white text-sm leading-0">Commit to <span className="text-primary">{props.repo}</span> #{props.commit}</h4>
                    <h5 className="m-0 p-0 font-ben font-semibold text-white/50 text-xs leading-0">{props.timestamp}</h5>
                </div>
                <div className="mt-3 float-right transition-all ease-in-out duration-300">
                    {props.status === "success" ? <span className="text-success-green text-xs rounded-full bg-success-green/20 font-ben font-bold px-3 py-1 relative -top-0.5">Success</span> : ""}
                    <div className="text-secondary bg-white text-center inline-block rounded-full w-6 h-6 leading-6 ml-4">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default GitHubActivityItem;