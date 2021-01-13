import styled from "styled-components";
import { COLORS } from "../../Colors";

export const CreatorsContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${COLORS.backgroundPurple};

    @media screen and (max-width: 768px) {
        height: 2100px;
    }

    @media screen and (max-width: 480px) {
        height: 2300px;
    }
`;

export const CreatorsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    /* three columns */
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    /* as the screen gets smaller, knock off the number of columns */
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const CreatorsCard = styled.div`
    background: ${COLORS.backgroundPurple};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const CreatorsIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const CreatorsH1 = styled.h1`
    font-size: 2.5rem;
    color: black;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const CreatorsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const CreatorsP = styled.p`
    font-size: 1rem;
    text-align: center;
`;
