import { Link } from "react-router-dom";

interface NavigationItemProps {
    name: String;
    url: String;
    active: Boolean;
}

const NavigationItem = (props: NavigationItemProps) => {
    return (
        <li className={`inline-block font-ben mr-7 font-semibold text-sm ${props.active ? 'text-white' : 'text-white/50'}`}>
            <Link to={`${props.url}`}>
                {props.name}
            </Link>
        </li>
    );
}

export default NavigationItem;