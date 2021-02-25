import styled from "styled-components";
import { COLORS } from "../../Colors";

export const CreatorsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10% 0;
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

    @media screen and (max-width: 775px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const CreatorCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 340px;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    } */
`;

export const CreatorIcon = styled.img`
    height: 200px;    

    @media screen and (max-width: 375px) {
        width: 80%;
        height: auto;
    }
`;

export const CreatorIconGroupLarge = styled.img`
    width: 100%;
    margin: 0 auto;
    @media screen and (max-width: 1200px) {
        display: none;
    }
`;

export const CreatorIconWrapper = styled.div`
    @media screen and (min-width: 1200px) {
        width: 80%;
    }
    @media screen and (max-width: 775px) {
        display: none;
    }
;`

export const CreatorsIndividualWrapper = styled.div`
    @media screen and (min-width: 775px) {
        display: none;
    }

    display: block;
}`

export const CreatorIconGroupMedium = styled.img`
    display: none;
    @media screen and (max-width: 1200px) {
        display: block;
        height: 200px;
    }
    @media screen and (max-width: 1000px) {
        display: block;
        height: 150px;
    }
    @media screen and (max-width: 770px) {
        height: 120px;
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
`;

export const CreatorName = styled.h2`
    font-size: 20px;
    color: ${COLORS.darkBlue};
    margin-bottom: 10px;
    margin-top: 20px;
    width: 90%;
    text-align: center;
    transition: 0.2s ease-in-out;
    &:hover {
        text-decoration: underline;
        color: ${COLORS.darkPurple};
    }
`;

export const CreatorLink = styled.a`
    text-decoration: none;
    color: initial;
    
;`

export const CreatorLabelGroupLarge = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    margin: 0 auto;
    grid-gap: 0;
    width: 100%;
    padding: 0 2%;
    @media screen and (max-width: 1200px){
        display: none;
    }
`;

export const CreatorLabelGroupMedOne = styled.div`
    display: none;
    width: 100%;
    padding: 0 2%;
    @media screen and (max-width: 1200px){
        display: none;display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin: 0 auto;
        grid-gap: 0;
    }

    @media screen and (max-width: 775px){
        display: none;
    }
`;

export const CreatorLabelGroupMedTwo = styled.div`
    display: none;
    width: 100%;
    padding: 0 2%;
    @media screen and (max-width: 1200px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin: 0 auto;
        grid-gap: 0;
    }

    @media screen and (max-width: 775px){
        display: none;
    }
`;


export const CreatorRole = styled.p`
    font-size: 16px;
    color: ${COLORS.mediumGray};
    text-align: center;
    font-weight: 500;
    margin-bottom: 40px;
    width: 90%;
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
