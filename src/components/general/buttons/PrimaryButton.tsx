import { Link } from "react-router-dom";

interface PrimaryButtonProps {
    name: String;
    classes?: String;
    url?: String;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    if(props.url) {
        return (
            <Link to={`${props.url}`}>
                <button className={`h-11 bg-gradient-to-r from-primary to-secondary w-32 rounded-md font-ben text-white font-bold text-center text-sm ${props.classes}`}>
                    {props.name}
                </button>
            </Link>
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