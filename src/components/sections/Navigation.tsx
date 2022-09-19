const Logo = require("../../assets/img/navigation-logo.png");

interface NavigationProps {
    active?: String;
}

const Navigation = (props: NavigationProps) => {
    return (
        <nav className="pt-12">
            <img src={Logo} alt="Ben Jenkins Logo" draggable="false" className="w-20" />
        </nav>
    );
}

export default Navigation;