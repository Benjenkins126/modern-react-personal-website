import Container from "../general/container/Container";
import Navigation from "./Navigation";

interface PageHeaderProps {
    children: any;
    subpage: boolean;
    activePage?: string;
}

const PageHeader = (props: PageHeaderProps) => {
    return (
        <header>
            <Container>
                {/* Navigation */}
                <Navigation active={props.activePage} />
                {props.children}
            </Container>
        </header>
    );
}

export default PageHeader;