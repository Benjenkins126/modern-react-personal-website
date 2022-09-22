import NavigationItem from "../general/navigation/NavigationItem";

const Logo = require("../../assets/img/navigation-logo.png");

interface NavigationProps {
    active?: String;
}

const Navigation = (props: NavigationProps) => {
    return (
        <nav className="pt-12">
            <img src={Logo} alt="Ben Jenkins Logo" draggable="false" className="w-20 inline-block" />
            <ul className="float-right">
                <NavigationItem name="Home" url="/" active={props.active === "Home" ? true : false} />
                <NavigationItem name="Portfolio" url="/portfolio" active={props.active === "Portfolio" ? true : false} />
                <NavigationItem name="Products" url="/products" active={props.active === "Products" ? true : false} />
                <NavigationItem name="Blog" url="/blog" active={props.active === "Blog" ? true : false} />
                <NavigationItem name="GitHub" url="https://github.com/Benjenkins126" active={props.active === "GitHub" ? true : false} />
            </ul>
        </nav>
    );
}

export default Navigation;