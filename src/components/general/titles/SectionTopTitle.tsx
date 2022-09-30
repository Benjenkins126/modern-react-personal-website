interface SectionTopTitleProps {
    children?: any;
    classes?: string;
}

const SectionTopTitle = (props: SectionTopTitleProps) => {
    return (
        <h5 className={`text-secondary font-ben font-bold uppercase text-sm ${props.classes}`}>{props.children}</h5>
    );
}

export default SectionTopTitle;