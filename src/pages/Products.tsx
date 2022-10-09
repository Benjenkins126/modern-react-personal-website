import { useEffect } from "react";
import Container from "../components/general/container/Container";
import ProductItem from "../components/pages/products/ProductItem";
import Footer from "../components/sections/Footer";
import PageHeader from "../components/sections/PageHeader";

const Products = () => {
    useEffect(() => {
        document.title = "Ben Jenkins - Products";
    });

    return (
        <>
            <PageHeader subpage={true} activePage="Products">
                <div className="pt-24 pb-24">
                    <h1 className="font-ben text-6xl font-bold text-white">Products</h1>
                </div>

                <Container>
                    <div className="grid gap-x-6 grid-cols-4 gap-y-8 pb-24">
                        <ProductItem image={null} title="Nexus - Premium Tebex Theme" excerpt="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" price="24.99" link="https://google.com" source="BuiltByBit" />
                        <ProductItem image={null} title="Nexus - Premium Tebex Theme" excerpt="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" price="24.99" link="https://google.com" source="BuiltByBit" />
                        <ProductItem image={null} title="Nexus - Premium Tebex Theme" excerpt="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" price="24.99" link="https://google.com" source="BuiltByBit" />
                        <ProductItem image={null} title="Nexus - Premium Tebex Theme" excerpt="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" price="24.99" link="https://google.com" source="BuiltByBit" />
                        <ProductItem image={null} title="Nexus - Premium Tebex Theme" excerpt="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" price="24.99" link="https://google.com" source="BuiltByBit" />
                        <ProductItem image={null} title="Nexus - Premium Tebex Theme" excerpt="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam" price="24.99" link="https://google.com" source="BuiltByBit" />
                    </div>
                </Container>
            </PageHeader>

            <Footer />
        </>
    );
}

export default Products;