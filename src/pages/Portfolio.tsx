import { useEffect } from "react";
import Container from "../components/general/container/Container";
import PortfolioFilterItem from "../components/pages/portfolio/filter/PortfolioFilterItem";
import Footer from "../components/sections/Footer";
import PageHeader from "../components/sections/PageHeader";

const Portfolio = () => {
    useEffect(() => {
        document.title = "Ben Jenkins - Portfolio";
    });

    return (
        <>
            <PageHeader subpage={true} activePage="Portfolio">
                <div className="pt-24 pb-24">
                    <h1 className="font font-ben text-6xl font-bold text-white">Portfolio</h1>
                </div>

                <Container>
                    <section className="pb-8 bg-background-secondary rounded-lg px-8 py-6">
                        <span className="text-white/50 font-ben font-medium text-sm">Filter:</span>
                        <PortfolioFilterItem active={true}>Software Development</PortfolioFilterItem>
                        <PortfolioFilterItem active={false}>Website Development</PortfolioFilterItem>
                    </section>
                </Container>
            </PageHeader>
        </>
    );
}

export default Portfolio;