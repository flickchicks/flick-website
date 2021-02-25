import styled from "styled-components";
import { COLORS } from "../../Colors";

export const TextWrapper = styled.div`
    max-width: 1200px;
    width: 75%;
    margin: 120px auto;
    @media screen and (max-width: 1000px) {
        max-width: 600px;
    }
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const H1 = styled.h1`
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 700;
    color: ${({ lightText }) => (lightText ? "#f7f8fa" : COLORS.darkBlue)};

    @media screen and (max-width: 480px) {
        font-size: 32px;
        padding: 0 0 30px;
    }
`;

export const H2 = styled.h1`
    margin-bottom: 25px;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 400;
    color: ${({ lightText }) => (lightText ? "#f7f8fa" : COLORS.darkBlue)};

    @media screen and (max-width: 480px) {
        font-size: 32px;
        padding: 0 0 30px;
    }
`;

export const H3 = styled.h1`
    margin-bottom: 25px;
    font-size: 25px;
    line-height: 1.1;
    font-weight: 400;
    color: ${({ lightText }) => (lightText ? "#f7f8fa" : COLORS.darkBlue)};

    @media screen and (max-width: 480px) {
        font-size: 32px;
        padding: 0 0 30px;
    }
`;

export const Text = styled.p`
    
    margin-bottom: 35px;
    font-size: 16px;
    line-height: 24px;
    color: ${COLORS.darkBlue};

    @media screen and (max-width: 480px) {
        text-align: center;
    }
`;
