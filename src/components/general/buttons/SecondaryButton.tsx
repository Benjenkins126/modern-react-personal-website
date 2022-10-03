import { Link } from "react-router-dom";

interface SecondaryButtonProps {
    name: String;
    classes?: String;
    url?: String;
}

const SecondaryButton = (props: SecondaryButtonProps) => {
    if(props.url) {
        return (
            <Link to={`${props.url}`}>
                <button className={`h-11 bg-gradient-to-r from-primary to-secondary w-32 rounded-md font-ben text-white font-bold text-center text-sm ${props.classes}`}>
                    <span className="bg-github-section w-124 h-40 leading-40 m-auto block rounded-md transition-all ease-in-out duration-300 hover:bg-transparent hover:text-white">{props.name}</span>
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

export default SecondaryButton;