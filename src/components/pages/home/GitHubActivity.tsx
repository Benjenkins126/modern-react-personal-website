import GitHubActivityItem from "./GItHubActivity/GitHubActivityItem";

const GitHubActivity = () => {
    return (
        <div className="w-578 rounded-md bg-github-section border-box pt-7 pb-2 px-8 float-right my-auto relative top-">
            <h3 className="text-white font-ben font-bold text-2xl">Recent GitHub Activity</h3>
            <GitHubActivityItem commit="e23sa2" repo="Metivate" timestamp="Tue 5 July : 22:06PM" status="success" url="https://github.com" lastItem={false} />
            <GitHubActivityItem commit="e23sa2" repo="Metivate" timestamp="Tue 5 July : 22:06PM" status="success" url="https://github.com" lastItem={false} />
            <GitHubActivityItem commit="e23sa2" repo="Metivate" timestamp="Tue 5 July : 22:06PM" status="success" url="https://github.com" lastItem={false} />
            <GitHubActivityItem commit="e23sa2" repo="Metivate" timestamp="Tue 5 July : 22:06PM" status="success" url="https://github.com" lastItem={true} />
        </div>
    );
}

export default GitHubActivity;