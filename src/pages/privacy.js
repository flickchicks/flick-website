import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Privacy from "../components/Privacy";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const PrivacyPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Privacy />
            <Footer />
        </>
    );
};

export default PrivacyPage;
