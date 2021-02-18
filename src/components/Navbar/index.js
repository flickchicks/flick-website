import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { COLORS } from "../../Colors";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavImg,
} from "./NavbarElements";
import Logomark from "../../images/logomark.svg"

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: COLORS.darkPurple }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        {/* normally you'd use "href", but react router uses "to" */}
                        <NavLogo to="/" onClick={toggleHome}>
                            <NavImg src={Logomark} />
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    About
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="creators"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    Creators
                                </NavLinks>
                            </NavItem>
                            {/* <NavItem>
                                <NavLinks
                                    to="signup"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    Sign Up
                                </NavLinks>
                            </NavItem> */}
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
