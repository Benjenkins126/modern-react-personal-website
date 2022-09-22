interface StatisticItemProps {
    name: String;
    value: String;
}

const StatisticItem = (props: StatisticItemProps) => {
    return (
        <div>
            <h4 className="text-center text-white font-ben font-bold text-3xl">{props.value}</h4>
            <h5 className="text-center text-secondary font-ben font-bold text-sm">{props.name}</h5>
        </div>
    );
}

export default StatisticItem;