import styled from "styled-components";
import { COLORS } from "../../Colors";

export const CreatorsContainer = styled.div`
    height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${COLORS.backgroundPurple};

    @media screen and (max-width: 1000px) {
        height: 1500px;
    }

    @media screen and (max-width: 768px) {
        height: 2300px;
    }

    @media screen and (max-width: 440px) {
        height: 2500px;
    }
`;

export const CreatorsWrapper = styled.div`
    /* max-width: 1000px; */
    margin: 0 auto;
    display: grid;
    /* three columns */
    grid-template-columns: 1fr;
    align-items: center;
    /* grid-gap: 16px; */
    padding: 0 50px;

    /* as the screen gets smaller, knock off the number of columns */
    /* @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    } */

    /* @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    } */

    @media screen and (max-width: 768px) {
        /* grid-template-columns: 1fr 1fr; */
        padding: 0 20px;
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const CreatorCard = styled.div`
    background: ${COLORS.backgroundPurple};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* border-radius: 10px; */
    max-height: 340px;
    /* padding: 30px; */
    /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */
    /* transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    } */
`;

export const CreatorIcon = styled.img`
    display: none;
    /* margin-bottom: 10px; */
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 660px) {
        height: 160px;
        width: 160px;
        display: block;
    }
`;

export const CreatorIconGroupLarge = styled.img`
    width: 80%;
    @media screen and (max-width: 1200px) {
        display: none;
    }
`;

export const CreatorIconGroupMedium = styled.img`
    /* width: 80%; */
    height: 20%;
    display: none;
    margin-bottom: 50px;
    @media screen and (max-width: 1200px) {
        display: block;
    }
    @media screen and (max-width: 1000px) {
        height: 15%;
        display: block;
    }
    @media screen and (max-width: 770px) {
        height: 10%;
        display: block;
    }
    @media screen and (max-width: 660px) {
        display: none;
    }
`;

export const CreatorsH1 = styled.h1`
    font-size: 2.5rem;
    color: black;
    margin-bottom: 30px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const CreatorsSubtitle = styled.h1`
    font-size: 18px;
    color: ${COLORS.darkBlueGray};
    margin-bottom: 30px;
    font-weight: 500;
    text-align: center;
    @media screen and (max-width: 500px) {
        /* font-size: 14px; */
    }
`;

export const CreatorName = styled.h2`
    font-size: 20px;
    color: ${COLORS.darkBlue};
    margin-bottom: 10px;
    display: none;

    @media screen and (max-width: 660px) {
        display: block;
    }
`;

export const CreatorRole = styled.p`
    font-size: 16px;
    color: ${COLORS.mediumGray};
    text-align: center;
    font-weight: 500;
    margin-bottom: 40px;
    display: none;

    @media screen and (max-width: 660px) {
        display: block;
    }
`;

export const TextWrapper = styled.div`
    max-width: 800px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        max-width: 440px;
    }

    @media screen and (max-width: 440px) {
        max-width: 300px;
    }
`;
