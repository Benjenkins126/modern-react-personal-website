import { Link } from "react-router-dom";

interface NavigationItemProps {
    name: String;
    url: String;
    active: Boolean;
}

const NavigationItem = (props: NavigationItemProps) => {
    return (
        <li className={`inline-block before:hover:transition-all before:hover:duration-200 font-ben mr-7 font-semibold text-sm before:w-1 before:h-1 before:rounded-full before:block before:content[""] before:mx-auto before:relative before:-bottom-6 ${props.active ? 'text-white before:bg-white' : 'text-white/50 transition-all duration-200 hover:text-white/80 hover:before:bg-white/50'}`}>
            <Link to={`${props.url}`}>
                {props.name}
            </Link>
        </li>
    );
}

export default NavigationItem;