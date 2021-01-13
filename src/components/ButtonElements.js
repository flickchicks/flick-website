import styled from "styled-components";
import { Link } from "react-scroll";
import { COLORS } from "../Colors";

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? "blue" : COLORS.lightPurple)};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
    color: ${({ dark }) => (dark ? "blue" : "#fff")};
    margin-right: 20px;
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    color: ${({ primary }) => (primary ? "blue" : COLORS.darkPurple)};

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? "#fff" : COLORS.darkPurple)};
        color: white;
    }

    @media screen and (max-width: 440px) {
        font-size: 12px;
    }
`;
