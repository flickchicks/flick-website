import styled from "styled-components";
import { COLORS } from "../../Colors";

export const InfoContainer = styled.div`
    /* max-height: 1100px; */
    background: ${COLORS.backgroundPurple};
    width:     /* height: 100%; */ 100%;
    @media screen and (max-width: 1000px) {
        /* max-height: 1300px; */
        padding: 100px 0;
    }
    @media screen and (max-width: 768px) {
        /* max-height: 1500px; */
        padding: 100px 0;
    }
    @media screen and (max-width: 440px) {
        /* max-height: 1200px; */
        padding: 0 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    height: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 200px 24px;
    justify-content: center;

    /* @media screen and (max-width: 1000px) {
        max-height: 900px;
    }
    @media screen and (max-width: 768px) {
        max-height: 1300px;
        padding: 100px 0px;
    }
    @media screen and (max-width: 440px) {
        max-height: 1400px;
        padding: 100px 0;
    } */
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) =>
        imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) =>
            imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const Column1 = styled.div`
    /* margin-bottom: 15px; */
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    /* margin-bottom: 15px; */
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 500px;
    padding-bottom: 60px;
    @media screen and (max-width: 1000px) {
        max-width: 400px;
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
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 16px;
    line-height: 24px;
    color: ${COLORS.darkBlue};

    @media screen and (max-width: 480px) {
        text-align: center;
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    @media screen and (max-width: 480px) {
        justify-content: center;
    }
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    padding: 0;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 0 0;
    padding-right: 0;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    @media screen and (max-width: 768px) {
        margin-left: 50px;
        margin-top: 60px;
    }
    @media screen and (max-width: 440px) {
        margin-left: 30px;
    }
    @media screen and (max-width: 300px) {
        margin-left: 20px;
    }
`;

export const SwirlyImg = styled.img`
    width: 100%;
    margin: 0 0 30px 0;
    padding-right: 0;
    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 480px) {
        /* max-width: 290px; */
        padding: 0 0 50px;
    }
`;
