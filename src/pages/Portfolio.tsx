import { useEffect } from "react";
import Container from "../components/general/container/Container";
import PortfolioItem from "../components/pages/home/Portfolio/PortfolioItem";
import PortfolioFilterItem from "../components/pages/portfolio/filter/PortfolioFilterItem";
import Footer from "../components/sections/Footer";
import PageHeader from "../components/sections/PageHeader";

const SidneyGFX = require("../assets/img/sidneygfx-portfolio.png");
const AthenaCMS = require("../assets/img/athenacms-portfolio.png");
const Controlly = require("../assets/img/controlly-portfolio.png");

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
                    <section className="mb-8 bg-background-secondary rounded-lg px-8 py-6">
                        <span className="text-white/50 font-ben font-medium text-sm">Filter:</span>
                        <PortfolioFilterItem active={true}>Software Development</PortfolioFilterItem>
                        <PortfolioFilterItem active={false}>Website Development</PortfolioFilterItem>
                    </section>

                    <div className="grid gap-x-8 grid-cols-3 mt-4 gap-y-12 pb-24">
                        <PortfolioItem link="/" name="Controlly" subtitle="Home Control & Automation Application" background={Controlly} />
                        <PortfolioItem link="/" name="Athena CMS" subtitle="Portfolio CMS for freelancers" background={AthenaCMS} />
                        <PortfolioItem link="/" name="SidneyGFX" subtitle="Website Design" background={SidneyGFX} />
                        <PortfolioItem link="/" name="Controlly" subtitle="Home Control & Automation Application" background={Controlly} />
                        <PortfolioItem link="/" name="Athena CMS" subtitle="Portfolio CMS for freelancers" background={AthenaCMS} />
                        <PortfolioItem link="/" name="SidneyGFX" subtitle="Website Design" background={SidneyGFX} />
                        <PortfolioItem link="/" name="Controlly" subtitle="Home Control & Automation Application" background={Controlly} />
                        <PortfolioItem link="/" name="Athena CMS" subtitle="Portfolio CMS for freelancers" background={AthenaCMS} />
                        <PortfolioItem link="/" name="SidneyGFX" subtitle="Website Design" background={SidneyGFX} />
                        <PortfolioItem link="/" name="Controlly" subtitle="Home Control & Automation Application" background={Controlly} />
                        <PortfolioItem link="/" name="Athena CMS" subtitle="Portfolio CMS for freelancers" background={AthenaCMS} />
                        <PortfolioItem link="/" name="SidneyGFX" subtitle="Website Design" background={SidneyGFX} />
                    </div>
                </Container>
            </PageHeader>

            <Footer />
        </>
    );
}

export default Portfolio;