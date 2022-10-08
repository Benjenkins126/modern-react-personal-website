interface PortfolioFilterItemProps {
    children?: any;
    active: boolean;
    onclick?: any;
}

const PortfolioFilterItem = (props: PortfolioFilterItemProps) => {
    return (
        <span className={`font-ben ml-5 text-sm transition-colors duration-200 ease-in-out ${props.active ? 'text-white font-bold' : 'text-white/50 font-semibold cursor-pointer hover:text-white/75'}`}>{props.children}</span>
    );
}

export default PortfolioFilterItem;