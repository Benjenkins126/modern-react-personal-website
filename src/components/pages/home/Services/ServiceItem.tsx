interface ServiceItemProps {
    icon: any;
    name: string;
    description: string;
    price: string;
}

const ServiceItem = (props: ServiceItemProps) => {
    return (
        <div>
            <div className="float-left">
                <img src={props.icon} alt={props.name} className="float-left" draggable="false" />
                <hr className="inline-block w-6 border border-white ml-4" />
            </div>
            <div className="ml-24">
                <h3 className="font-ben font-bold uppercase text-xl text-white mb-3">{props.name}</h3>
                <p className="text-sm font-ben font-medium text-white/75 leading-7">{props.description}</p>
                <h5 className="uppercase text-white text-9 font-ben font-bold mt-5">Starting From</h5>
                <h6 className="text-lg text-white font-ben font-bold">${props.price} USD</h6>
            </div>
        </div>
    );
}

export default ServiceItem;