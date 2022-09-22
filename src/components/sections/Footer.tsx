import Container from "../general/container/Container";
const Logo = require("../../assets/img/navigation-logo.png");

const Footer = () => {
    return (
        <footer className="bg-background-secondary py-8">
            <Container>
                <img src={Logo} alt="Ben Jenkins Logo" className="w-20 block m-auto" draggable="false" />
                <p className="font-ben font-medium text-center italic text-white/25 text-sm mt-3">Copyright &copy; Ben Jenkins 2022, All Rights Reserved</p>
            </Container>
        </footer>
    );
}

export default Footer;