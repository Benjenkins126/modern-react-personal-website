import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

interface RecentBlogPostItemProps {
    image?: any;
    title: string;
    except: string;
    timestamp: string;
    link: string;
}

const RecentBlogPostItem = (props: RecentBlogPostItemProps) => {
    return (
        <div className="bg-background-secondary rounded-lg">
            <Link to={props.link}>
                <img src={props.image} alt={props.title} draggable="false" className="bg-image-placeholder w-full h-36 rounded-tl-lg rounded-tr-lg" />
                <div className="p-6">
                    <h4 className="text-white font-bold font-ben text-base">{props.title}</h4>
                    <p className="font-ben text-medium text-white/50 mt-2.5 mb-3.5 text-xs leading-5">{props.except}</p>
                    <h6 className="font-ben text-white font-medium text-xs">
                        <FontAwesomeIcon icon={faClock} /> {props.timestamp}
                    </h6>
                </div>
            </Link>
        </div>
    );
}

export default RecentBlogPostItem;