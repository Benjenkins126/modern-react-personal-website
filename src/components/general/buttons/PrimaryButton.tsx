import { Link } from "react-router-dom";

interface PrimaryButtonProps {
    name: string;
    classes?: string;
    url?: string;
    externalUrl?: string;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    if(props.url) {
        return (
            <Link to={`${props.url}`}>
                <button className={`transition-all duration-300 hover:opacity-75 ease-in-out h-11 bg-gradient-to-r from-primary to-secondary w-32 rounded-md font-ben text-white font-bold text-center text-sm  ${props.classes}`}>
                    {props.name}
                </button>
            </Link>
        );
    } else if(props.externalUrl) {
        return (
            <a href={`${props.url}`}>
                <button className={`transition-all duration-300 hover:opacity-75 ease-in-out h-11 bg-gradient-to-r from-primary to-secondary w-32 rounded-md font-ben text-white font-bold text-center text-sm  ${props.classes}`}>
                    {props.name}
                </button>
            </a>
        );
    } else {
        return (
            <button className={`${props.classes}`}>
                {props.name}
            </button>
        )
    }
}

export default PrimaryButton;