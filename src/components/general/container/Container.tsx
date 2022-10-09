interface ContainerProps {
    children: any;
    classes?: string;
}

const Container = (props: ContainerProps) => {
    return (
        <div className={`w-1350 mx-auto ${props.classes}`}>
            {props.children}
        </div>
    );
}

export default Container;