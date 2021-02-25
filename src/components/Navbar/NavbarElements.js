import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { COLORS } from "../../Colors";

export const Nav = styled.nav`
    background: rgba(247,245,254,.75);
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    backdrop-filter: blur(10px);

    @media screen and (max-width: 960px) {
        transition: 0.5s all ease;
    }
`;

// link from react router
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 75%;
    max-width: 1200px;

    @media screen and (max-width: 768px) {
        width: 80%
    }

    @media screen and (max-width: 500px) {
        width: 90%
    }
`;

export const NavLogo = styled(LinkR)`
    color: black;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-weight: bold;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }
    @media screen and (max-width: 530px) {
        margin-left: 0;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: black;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: ${COLORS.darkBlue};
    font-size: 1rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    /* whichever navbar tab you hit on, gets highlighted with border  */
    /* &.active {
        border-bottom: 3px solid ${COLORS.darkPurple};
    } */
    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${COLORS.darkPurple};
        cursor: pointer; 
        font-weight: 700;       
    }
    
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowarp;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const NavImg = styled.img`
    height: 40%;
    @media screen and (max-width: 440px) {
        height: 30%;
    }
`;
