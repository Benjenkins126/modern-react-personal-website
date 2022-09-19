interface ContainerProps {
    children: any;
}

const Container = (props: ContainerProps) => {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default Container;