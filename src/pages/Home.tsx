import { useEffect } from "react";
import { Link } from "react-router-dom";
import GitHubActivity from "../components/pages/home/GitHubActivity";
import NewsAlert from "../components/pages/home/NewsAlert";
import PageHeader from "../components/sections/PageHeader";

const Home = () => {
    useEffect(() => {
        document.title = "Ben Jenkins - Home";
    });

    return (
        <>
            <PageHeader subpage={false}>
                <div className="grid grid-cols-2 gap-12 py-36">
                    <div>
                        <NewsAlert text="Welcome to my new website!" />
                        <div>
                            <h1 className="font-ben text-6xl font-bold text-white inline-block">Ben Jenkins 👋</h1>
                        </div>
                        <h2 className="font-ben text-6xl font-bold mt-5"><span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary after:contents[''] after:block after:w-full after:right-0 after:left-0 after:bottom-5 after:relative after:h-5 after:bg-primary/30">Software</span> <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary after:contents[''] after:block after:w-full after:right-0 after:left-0 after:bottom-5 after:relative after:h-5 after:bg-primary/30">Developer</span></h2>
                        <p className="font-ben font-medium text-white/75 text-sm leading-8 mb-7 mt-3">Hi, I'm Ben!  Since the age of 13 I have been developing software and websites for hundreds of people around the globe.</p>
                        <div>
                            <button>
                                <Link to="/portfolio">
                                    <span>View Work</span>
                                </Link>
                            </button>
                            <button>
                                <Link to="/contact">
                                    <span>Contact Me</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div>
                        <GitHubActivity />
                    </div>
                </div>
            </PageHeader>
        </>
    );
}

export default Home;