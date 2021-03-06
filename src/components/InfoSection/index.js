import React from "react";
import styled from "styled-components";
import { COLORS } from "../../Colors";
import EmailInput from "./EmailInput.js";


const InfoContainer = styled.div`
    width: 75%;
    max-width: 1200px;
    margin: 8% auto;
    display: flex;
    @media screen and (max-width: 1000px) {
        max-height: 800px;
        /* padding: 100px 0; */
    }

    @media screen and (max-width: 768px) {
        display: block;
        margin: 15% auto;
        width: 80%;
    }
    @media screen and (max-width: 530px) {
        display: block;
        margin: 20% auto;
        width: 90%;
    }

`;

const Heading = styled.h1`
    margin-bottom: 56px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 700;
    color: ${COLORS.darkBlue};

    @media screen and (max-width: 480px) {
        font-size: 32px;
        margin-bottom: 40px
    }
`;

const InfoWrapper = styled.div`
    display: block;
    width: 60%;
    padding: 40px 20px 20px 20px;

    @media screen and (max-width: 1130px) {
        width: 100%;
    }
    @media screen and (max-width: 500px) {
        width: 100%;
        padding: 40px 0;
    }

`

const Note = styled.p`
    color: ${COLORS.mediumGray};
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 36px;
`

const InfoSection = ({
    imgStart,
    headline,
    description,
    buttonLabelOne,
    buttonLabelTwo,
    img,
    alt,
}) => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <Heading>{headline}</Heading>
                    <h5>Want to be a part of this? Put your email down and we'll send you a link to join from the App Store.</h5>
                    <Note>Coming soon to Android!</Note>
                    <EmailInput />
                </InfoWrapper>

            </InfoContainer>
        </>
    );
};

export default InfoSection;
