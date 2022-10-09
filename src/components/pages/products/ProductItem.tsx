import PrimaryButton from "../../general/buttons/PrimaryButton";

interface ProductItemProps {
    image?: any;
    title: any;
    excerpt: string;
    price: string;
    link: string;
    source: string;
}

const ProductItem = (props: ProductItemProps) => {
    return (
        <div className="bg-background-secondary rounded-lg">
            <a href={props.link}>
                <img src={props.image} alt={props.title} draggable="false" className="bg-image-placeholder w-full h-36 rounded-tl-lg rounded-tr-lg" />
                <div className="p-6">
                    <h4 className="text-white font-bold font-ben text-base">{props.title}</h4>
                    <h5 className="text-secondary font-ben text-medium text-sm mt-1.5">${props.price} USD</h5>
                    <p className="font-ben text-medium text-white/50 mt-2.5 mb-3.5 text-xs leading-5">{props.excerpt}</p>
                    <PrimaryButton name={`Purchase on ${props.source}`} externalUrl={props.link} classes="w-full text-xs h-9" />
                </div>
            </a>
        </div>
    );
}

export default ProductItem;