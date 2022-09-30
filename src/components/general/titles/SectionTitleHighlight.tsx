interface SectionTitleHighlightProps {
    children?: any;
}

const SectionTitleHighlight = (props: SectionTitleHighlightProps) => {
    return (
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary after:contents[''] after:block after:w-full after:right-0 after:left-0 after:bottom-5 after:relative after:h-5 after:bg-primary/30">{props.children}</span>
    );
}

export default SectionTitleHighlight;