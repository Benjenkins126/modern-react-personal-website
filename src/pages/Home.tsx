import { useEffect } from "react";
import PrimaryButton from "../components/general/buttons/PrimaryButton";
import SecondaryButton from "../components/general/buttons/SecondaryButton";
import Container from "../components/general/container/Container";
import ParagraphText from "../components/general/text/ParagraphText";
import SectionTitle from "../components/general/titles/SectionTitle";
import SectionTitleHighlight from "../components/general/titles/SectionTitleHighlight";
import SectionTopTitle from "../components/general/titles/SectionTopTitle";
import RecentBlogPostItem from "../components/pages/home/Blog/RecentBlogPostItem";
import ExperienceItem from "../components/pages/home/Experience/ExperienceItem";
import GitHubActivity from "../components/pages/home/GitHubActivity";
import NewsAlert from "../components/pages/home/NewsAlert";
import PortfolioItem from "../components/pages/home/Portfolio/PortfolioItem";
import ServiceItem from "../components/pages/home/Services/ServiceItem";
import StatisticItem from "../components/pages/home/StatisticItem";
import Footer from "../components/sections/Footer";
import PageHeader from "../components/sections/PageHeader";

const QualityLaptop = require("../assets/img/quality-computer.png");

const SidneyGFX = require("../assets/img/sidneygfx-portfolio.png");
const AthenaCMS = require("../assets/img/athenacms-portfolio.png");
const Controlly = require("../assets/img/controlly-portfolio.png");

const WebDevelopmentIcon = require("../assets/img/website-development-icon.png");
const TechnicalDevelopmentIcon = require("../assets/img/technical-development-icon.png");
const SoftwareDevelopmentIcon = require("../assets/img/software-development-icon.png");
const AndroidDevelopmentIcon = require("../assets/img/android-development-icon.png");

const Home = () => {
    useEffect(() => {
        document.title = "Ben Jenkins - Home";
    });

    return (
        <>
            <PageHeader subpage={false} activePage="Home">
                <div className="grid grid-cols-2 gap-x-16 pt-16 pb-32">
                    <div className="my-auto">
                        <NewsAlert text="Welcome to my new website!" />
                        <div>
                            <h1 className="font-ben text-6xl font-bold text-white inline-block wave-effect">Ben Jenkins <span>👋</span></h1>
                        </div>
                        <h2 className="font-ben text-6xl font-bold mt-5"><span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary after:contents[''] after:block after:w-full after:right-0 after:left-0 after:bottom-5 after:relative after:h-5 after:bg-primary/30">Software</span> <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary after:contents[''] after:block after:w-full after:right-0 after:left-0 after:bottom-5 after:relative after:h-5 after:bg-primary/30">Developer</span></h2>
                        <p className="font-ben font-medium text-white/75 text-sm leading-8 mb-7 mt-3">Hi, I'm Ben!  Since the age of 13 I have been developing software and websites for hundreds of people around the globe.</p>
                        <div>
                            <PrimaryButton name="View Work" url="/portfolio" classes="mr-4" />
                            <SecondaryButton name="Contact Me" url="/contact" />
                        </div>
                    </div>
                    <div>
                        <GitHubActivity />
                    </div>
                </div>
            </PageHeader>

            {/* Pricing Section */}
            <div className="bg-secondary">
                <Container>
                    <div className="grid grid-cols-4 gap-x-12 py-14">
                        <ServiceItem icon={WebDevelopmentIcon} name="Website Development" price="200" description="In need for a website for your business? I can do everything from the initial UI design, through to the deployment on the cloud." />
                        <ServiceItem icon={TechnicalDevelopmentIcon} name="Technical Consultancy" price="500" description="Feel like somethings wrong with your business? I can review your technical processes and report on what can be improved." />
                        <ServiceItem icon={SoftwareDevelopmentIcon} name="Android/iOS Development" price="500" description="Looking to expand your business to both Android and iOS? Using React Native I can build you an Android/iOS application for your business." />
                        <ServiceItem icon={AndroidDevelopmentIcon} name="Software Development" price="200" description="Whether it’s an API, custom POS system or an inventory management system, I can build bespoke software for your business." />
                    </div>
                </Container>
            </div>

            {/* Quality Section */}
            <section className="bg-background">
                <Container>
                    <div className="grid grid-cols-2 gap-x-16 py-16">
                        <div className="my-auto">
                            <img src={QualityLaptop} alt="Past Work Preview" className="w-502 float-right" draggable="false" />
                        </div>
                        <div className="my-auto">
                            <SectionTopTitle>Quality</SectionTopTitle>
                            <SectionTitle classes="w-9/12 capitalize leading-48">Quality that <SectionTitleHighlight>can't be matched</SectionTitleHighlight></SectionTitle>
                            <ParagraphText classes="w-10/12">Having worked for many customers over the years, I have learned how to build products that are well designed and scalable. I’ve learned the full technical process from design to deployment,  ensuring customers receive the full end-to-end service that they deserve.</ParagraphText>
                            <div>
                                <PrimaryButton name="View Work" url="/portfolio" classes="mt-6"></PrimaryButton>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Statistics Section */}
            <section className="bg-background-secondary">
                <Container>
                    <div className="grid grid-cols-3 gap-x-6 py-16">
                        <StatisticItem name="Projects Worked On" value="1,000+" />
                        <StatisticItem name="Programming Experience" value="5 Years +" />
                        <StatisticItem name="Languages Known" value="5+" />
                    </div>
                </Container>
            </section>

            {/* Recent Work Section */}
            <section className="bg-background py-16">
                <Container>
                    <SectionTopTitle classes="text-center">Portfolio</SectionTopTitle>
                    <div className="text-center">
                        <SectionTitle classes="inline-block after:contents[''] after:block after:w-full after:right-0 after:bottom-5 after:relative after:h-5 after:bg-primary/30">Recent Work</SectionTitle>
                    </div>
                    <div className="grid gap-x-8 grid-cols-3 mt-4">
                        <PortfolioItem link="" name="Controlly" subtitle="Home Control & Automation Application" background={Controlly} />
                        <PortfolioItem link="" name="Athena CMS" subtitle="Portfolio CMS for freelancers" background={AthenaCMS} />
                        <PortfolioItem link="" name="SidneyGFX" subtitle="Website Design" background={SidneyGFX} />
                    </div>
                    <div className="text-center pt-12">
                        <PrimaryButton name="View More" url="/portfolio"></PrimaryButton>
                    </div>
                </Container>
            </section>

            {/* Core Skills Section */}
            <section className="bg-background-secondary py-16">
                <Container>
                    <SectionTopTitle>Experience</SectionTopTitle>
                    <SectionTitle classes="inline-block after:contents[''] after:block after:w-full after:right-0 after:bottom-5 after:relative after:h-5 after:bg-primary/30">Core Skills</SectionTitle>
                    <div className="grid grid-cols-5 gap-x-6">
                        <ExperienceItem title="Software Development" items={["PHP", "Node.JS", "C#", "MySQL", "Microsoft SQL", "SQLite", "NoSQL (MongoDB)", "Python (WIP)"]} />
                        <ExperienceItem title="Website Development" items={["HTML", "CSS/SASS", "JavaScript", "Responsive Design", "SEO", "jQuery", "Bootstrap"]} />
                        <ExperienceItem title="&nbsp;" items={["React.JS", "Next.JS", "ASP.Net Razor", "Tailwind CSS"]} />
                        <ExperienceItem title="Other" items={["Microsoft SQL Studio", "Git", "AWS Cloud Architecture", "Linux Shell (Basic)"]} />
                    </div>
                </Container>
            </section>

            {/* Recent Posts Section */}
            <section className="bg-background py-16">
                <Container>
                    <SectionTopTitle classes="text-center">Blog</SectionTopTitle>
                    <div className="text-center">
                        <SectionTitle classes="inline-block after:contents[''] after:block after:w-full after:right-0 after:bottom-5 after:relative after:h-5 after:bg-primary/30">Recent Posts</SectionTitle>
                    </div>
                    <div className="grid grid-cols-4 gap-x-6 mt-4">
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" />
                    </div>
                </Container>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
}

export default Home;