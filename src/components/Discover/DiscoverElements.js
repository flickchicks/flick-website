import styled from "styled-components";
import { COLORS } from "../../Colors";

export const DiscoverContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    background: ${COLORS.backgroundPurple};

    @media screen and (max-width: 1050px) {
        height: 1550px;
    }

    @media screen and (max-width: 768) {
        height: 1600px;
    }

    @media screen and (max-width: 440px) {
        height: 900;
    }
`;

export const DiscoverWrapper = styled.div`
    margin: 0 auto;
    display: grid;
    background-color: ${COLORS.backgroundPurple};
    /* three columns */
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 200px;
    /* padding: 100px 100px 100px 100px; */

    /* as the screen gets smaller, knock off the number of columns */
    /* @media screen and (max-width: 1000px) {
        grid-gap: 30px;
    } */

    @media screen and (max-width: 1050px) {
        grid-template-columns: 1fr;
        /* padding: 0 20px; */
        /* grid-gap: 30px; */
    }

    @media screen and (max-width: 440px) {
        grid-gap: 10px;
    }
`;

export const DiscoverCard = styled.div`
    background: ${COLORS.backgroundPurple};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    max-height: 900px;
    /* padding: 10px; */
    /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */
    /* transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    } */
`;

export const DiscoverIcon = styled.img`
    height: 400px;
    width: 400px;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 5px;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    @media screen and (max-width: 440px) {
        height: 200px;
        width: 200px;
    }
`;

export const DiscoverH1 = styled.h1`
    font-size: 2.5rem;
    color: black;
    margin-bottom: 30px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const DiscoverSubtitle = styled.h1`
    font-size: 1rem;
    color: ${COLORS.back};
    margin-bottom: 30px;
    font-weight: 500;
`;

export const DiscoverH2 = styled.h2`
    font-size: 1.5rem;
    color: ${COLORS.darkBlue};
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        font-size: 1.25rem;
    }

    @media screen and (max-width: 440px) {
        font-size: 0.8rem;
    }
`;

export const DiscoverP = styled.p`
    font-size: 16px;
    color: ${COLORS.mediumGray};
    text-align: center;
    font-weight: 500;
`;
