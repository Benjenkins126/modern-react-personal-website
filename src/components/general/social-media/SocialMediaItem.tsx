import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SocialMediaItemProps {
    icon: any;
    link: string;
    lastItem: boolean;
    color: string;
}

const SocialMediaItem = (props: SocialMediaItemProps) => {
    return (
        <a href={props.link}>
            <div className={`${props.color} text-2xl w-14 h-14 text-center`}>
                <FontAwesomeIcon icon={props.icon} className={`py-4 w-9/12 ${props.lastItem ? '' : 'border-b border-white/20'}`} />
            </div>
        </a>
    );
}

export default SocialMediaItem;