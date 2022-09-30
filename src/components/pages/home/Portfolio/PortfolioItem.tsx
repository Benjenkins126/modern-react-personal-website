interface PortfolioItemProps {
    name: String;
    subtitle: String;
    background?: any;
}

const PortfolioItem = (props: PortfolioItemProps) => {
    return (
        <div className="">
            <img src={props.background} alt={`${props.name}`} draggable="false" />
            <div className="background-blur bg-black/25 relative -mt-20 px-4 py-2.5 rounded-lg w-11/12 mx-auto">
                <h4 className="text-white font-bold font-ben text-lg">{props.name}</h4>
                <h5 className="text-white/50 font-bold font-ben text-xs">{props.subtitle}</h5>
            </div>
        </div>
    );
}

export default PortfolioItem;