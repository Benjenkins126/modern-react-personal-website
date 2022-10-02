interface ExperienceItemProps {
    title?: String;
    items: Array<string>;
}

const ExperienceItem = (props: ExperienceItemProps) => {
    return (
        <div>
            <h3 className="text-white font-ben font-bold text-base mt-5 mb-2.5">{props.title ? props.title : ' '}</h3>
            <ul>
                {props.items.map((item) => (
                    <li className="leading-7 text-white/50 font-medium font-ben before:content[''] before:inline-block before:w-2 before:h-2 before:bg-gradient-to-r before:from-primary before:to-secondary before:rounded-full before:mr-2">{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ExperienceItem;