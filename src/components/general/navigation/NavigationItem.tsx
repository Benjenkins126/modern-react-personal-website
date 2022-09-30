import { Link } from "react-router-dom";

interface NavigationItemProps {
    name: String;
    url: String;
    active: Boolean;
}

const NavigationItem = (props: NavigationItemProps) => {
    return (
        <li className={`inline-block font-ben mr-7 font-semibold text-sm ${props.active ? 'text-white before:w-1 before:h-1 before:rounded-full before:block before:content[""] before:bg-white before:mx-auto before:relative before:-bottom-6' : 'text-white/50'}`}>
            <Link to={`${props.url}`}>
                {props.name}
            </Link>
        </li>
    );
}

export default NavigationItem;