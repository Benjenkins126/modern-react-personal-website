interface ParagraphTextProps {
    children?: any;
    classes?: String;
}

const ParagraphText = (props: ParagraphTextProps) => {
    return (
        <p className={`font-ben text-sm text-white/75 leading-7 ${props.classes}`}>
            {props.children}
        </p>
    );
}

export default ParagraphText;