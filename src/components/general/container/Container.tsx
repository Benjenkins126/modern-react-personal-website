interface ContainerProps {
    children: any;
}

const Container = (props: ContainerProps) => {
    return (
        <div className="w-1350 mx-auto">
            {props.children}
        </div>
    );
}

export default Container;