import { useEffect } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/general/buttons/PrimaryButton";
import SecondaryButton from "../components/general/buttons/SecondaryButton";
import Container from "../components/general/container/Container";
import GitHubActivity from "../components/pages/home/GitHubActivity";
import NewsAlert from "../components/pages/home/NewsAlert";
import StatisticItem from "../components/pages/home/StatisticItem";
import Footer from "../components/sections/Footer";
import PageHeader from "../components/sections/PageHeader";

const Home = () => {
    useEffect(() => {
        document.title = "Ben Jenkins - Home";
    });

    return (
        <>
            <PageHeader subpage={false} activePage="Home">
                <div className="grid grid-cols-2 gap-12 py-32">
                    <div className="my-auto">
                        <NewsAlert text="Welcome to my new website!" />
                        <div>
                            <h1 className="font-ben text-6xl font-bold text-white inline-block">Ben Jenkins 👋</h1>
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
                    <div className="grid grid-rows-4 gap-x-6 py-14">

                    </div>
                </Container>
            </div>

            {/* Quality Section */}

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

            {/* Core Skills Section */}
            <section className="bg-background-secondary">
                <Container>
                    <div className="grid grid-cols-6 gap-x-6 py-16">

                    </div>
                </Container>
            </section>

            {/* Recent Posts Section */}

            {/* Footer */}
            <Footer />
        </>
    );
}

export default Home;