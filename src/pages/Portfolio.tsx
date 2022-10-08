import { useEffect } from "react";
import Footer from "../components/sections/Footer";
import PageHeader from "../components/sections/PageHeader";

const Portfolio = () => {
    useEffect(() => {
        document.title = "Ben Jenkins - Portfolio";
    });

    return (
        <>
            <PageHeader subpage={true} activePage="Portfolio">
                <div className="pt-24 pb-28">
                    <h1 className="font font-ben text-6xl font-bold text-white">Portfolio</h1>
                </div>
            </PageHeader>
        </>
    );
}

export default Portfolio;