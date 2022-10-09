import { useEffect } from "react";
import Container from "../components/general/container/Container";
import RecentBlogPostItem from "../components/pages/home/Blog/RecentBlogPostItem";
import Footer from "../components/sections/Footer";
import PageHeader from "../components/sections/PageHeader";

const Blog = () => {
    useEffect(() => {
        document.title = "Ben Jenkins - Blog Posts";
    });

    return (
        <>
            <PageHeader subpage={true} activePage="Blog">
                <div className="pt-24 pb-24">
                    <h1 className="font-ben text-6xl font-bold text-white">Blog Posts</h1>
                </div>

                <Container>
                    <div className="grid grid-cols-4 gap-x-6 gap-y-8 pb-24">
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                        <RecentBlogPostItem image={null} title="Will serverless technology be the future?" except="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" timestamp="21st July 2022" link="/" source="Hackermoon" />
                    </div>
                </Container>
            </PageHeader>

            <Footer />
        </>
    );
}

export default Blog;