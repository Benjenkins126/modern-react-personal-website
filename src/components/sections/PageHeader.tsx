import Container from "../general/container/Container";
import Navigation from "./Navigation";

interface PageHeaderProps {
    children: any;
    subpage: boolean;
    activePage?: string;
}

const PageHeader = (props: PageHeaderProps) => {
    return (
        <header className={`${props.subpage ? 'bg-subpage-background' : 'bg-home-background'} bg-[length:100%] bg-background bg-no-repeat bg-top`}>
            <Container>
                {/* Navigation */}
                <Navigation active={props.activePage} />
                {props.children}
            </Container>
        </header>
    );
}

export default PageHeader;