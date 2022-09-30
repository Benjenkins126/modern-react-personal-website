interface SectionTitleProps {
    children?: any;
    classes?: String;
}

const SectionTitle = (props: SectionTitleProps) => {
    return (
        <h2 className={`text-white font-ben font-bold text-4xl ${props.classes}`}>{props.children}</h2>
    );
}

export default SectionTitle;