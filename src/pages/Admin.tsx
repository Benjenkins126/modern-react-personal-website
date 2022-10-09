import { useEffect } from "react";
import PrimaryButton from "../components/general/buttons/PrimaryButton";
import Container from "../components/general/container/Container";
import TextInput from "../components/general/inputs/TextInput";
import Footer from "../components/sections/Footer";
import PageHeader from "../components/sections/PageHeader";

const Admin = () => {
    useEffect(() => {
        document.title = "Ben Jenkins - Admin Login";
    });

    return (
        <>
            <PageHeader subpage={true}>
                <div className="pt-24 pb-24">
                    <h1 className="font-ben text-6xl font-bold text-white">Admin Login</h1>
                </div>

                <Container classes="pb-24">
                    <div className="bg-background-secondary rounded-lg p-7">
                        <TextInput label="Username" name="username" id="username" type="text" />
                        <TextInput label="Password" name="password" id="password" type="password" />
                        <PrimaryButton name="Submit" classes="w-28 mt-2" />
                    </div>
                </Container>
            </PageHeader>

            <Footer />
        </>
    );
}

export default Admin;