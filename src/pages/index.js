import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InfoSection from "../components/InfoSection";
import { InfoObj } from "../components/InfoSection/Data";
import Creators from "../components/Creators";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <InfoSection {...InfoObj} />
            <About />
            <Creators />
            <Footer />
        </>
    );
};

export default Home;
