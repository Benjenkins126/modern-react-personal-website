import { Link } from "react-router-dom";
import PrimaryButton from "../general/buttons/PrimaryButton";
import SecondaryButton from "../general/buttons/SecondaryButton";
import NavigationItem from "../general/navigation/NavigationItem";

const Logo = require("../../assets/img/navigation-logo.png");

interface NavigationProps {
    active?: String;
}

const Navigation = (props: NavigationProps) => {
    return (
        <nav className="pt-12">
            <Link to="/">
                <img src={Logo} alt="Ben Jenkins Logo" draggable="false" className="w-20 inline-block" />
            </Link>
            <ul className="float-right mt-5">
                <NavigationItem name="Home" url="/" active={props.active === "Home" ? true : false} />
                <NavigationItem name="Portfolio" url="/portfolio" active={props.active === "Portfolio" ? true : false} />
                <NavigationItem name="Products" url="/products" active={props.active === "Products" ? true : false} />
                <NavigationItem name="Blog" url="/blog" active={props.active === "Blog" ? true : false} />
                <NavigationItem name="GitHub" url="https://github.com/Benjenkins126" active={props.active === "GitHub" ? true : false} />
                <li className="inline-block mr-3">
                    <PrimaryButton name="Contact" url="/contact" />
                </li>
                <li className="inline-block">
                    <SecondaryButton name="Tracking" url="/tracking" />
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;