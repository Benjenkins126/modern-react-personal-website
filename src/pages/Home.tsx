import { useEffect } from "react";
import PageHeader from "../components/sections/PageHeader";

const Home = () => {
    useEffect(() => {
        document.title = "Ben Jenkins - Home";
    });

    return (
        <>
            <PageHeader subpage={false}>
                <div className="grid grid-cols-2 gap-12">
                    <div>
                        {/* News Popup */}
                        {/* Page Title */}
                        {/* Description */}
                        {/* Buttons */}
                    </div>
                    <div>
                        {/* GitHub Activity */}
                    </div>
                </div>
            </PageHeader>
        </>
    );
}

export default Home;