import React from "react";
import { Button } from "../ButtonElements";
import IconSwirly from "../../images/swirly.svg";

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    SwirlyImg,
} from "./InfoElements";

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
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading>{headline}</Heading>
                                <ImgWrap>
                                    <SwirlyImg src={IconSwirly} />
                                </ImgWrap>
                                <Subtitle>{description}</Subtitle>

                                <BtnWrap>
                                    <Button
                                        to="home"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                    >
                                        {buttonLabelOne}
                                    </Button>
                                    <Button
                                        to="home"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                    >
                                        {buttonLabelTwo}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;
