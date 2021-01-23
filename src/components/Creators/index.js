import React from "react";
import IconAlanna from "../../images/alanna.png";
import IconAastha from "../../images/aastha.png";
import IconHaiying from "../../images/haiying.png";
import IconLucy from "../../images/lucy.png";
import IconOlivia from "../../images/olivia.png";
import IconVivi from "../../images/vivi.png";
import IconCindy from "../../images/cindy.png";
import IconGroupLarge from "../../images/filmstrip.png";
import IconGroupMediumOne from "../../images/row 1.png";
import IconGroupMediumTwo from "../../images/row 2.png";

import {
    CreatorsContainer,
    CreatorsH1,
    CreatorsSubtitle,
    CreatorsWrapper,
    CreatorCard,
    CreatorIcon,
    CreatorName,
    CreatorRole,
    TextWrapper,
    CreatorIconGroupLarge,
    CreatorIconGroupMedium,
} from "./CreatorsElements";

const Creators = () => {
    return (
        <CreatorsContainer id="creators">
            <CreatorsH1>Made by</CreatorsH1>

            <CreatorsSubtitle>
                <TextWrapper>
                    Seven friends at Cornell who like to talk about shows
                    instead of work.
                </TextWrapper>
            </CreatorsSubtitle>
            <CreatorIconGroupLarge src={IconGroupLarge} />
            <CreatorIconGroupMedium src={IconGroupMediumOne} />
            <CreatorIconGroupMedium src={IconGroupMediumTwo} />

            <CreatorsWrapper>
                <CreatorCard>
                    <CreatorIcon src={IconAlanna} />
                    <CreatorName>Alanna</CreatorName>
                    <CreatorRole>Backend Developer</CreatorRole>
                </CreatorCard>
                <CreatorCard>
                    <CreatorIcon src={IconVivi} />
                    <CreatorName>Vivi</CreatorName>
                    <CreatorRole>Backend Developer</CreatorRole>
                </CreatorCard>
                <CreatorCard>
                    <CreatorIcon src={IconOlivia} />
                    <CreatorName>Olivia</CreatorName>
                    <CreatorRole>Backend Developer</CreatorRole>
                </CreatorCard>
                <CreatorCard>
                    <CreatorIcon src={IconHaiying} />
                    <CreatorName>Haiying</CreatorName>
                    <CreatorRole>iOS Developer</CreatorRole>
                </CreatorCard>
                <CreatorCard>
                    <CreatorIcon src={IconLucy} />
                    <CreatorName>Lucy</CreatorName>
                    <CreatorRole>iOS Developer</CreatorRole>
                </CreatorCard>
                <CreatorCard>
                    <CreatorIcon src={IconAastha} />
                    <CreatorName>Aastha</CreatorName>
                    <CreatorRole>Android Developer</CreatorRole>
                </CreatorCard>
                <CreatorCard>
                    <CreatorIcon src={IconCindy} />
                    <CreatorName>Cindy</CreatorName>
                    <CreatorRole>Designer</CreatorRole>
                </CreatorCard>
            </CreatorsWrapper>
        </CreatorsContainer>
    );
};

export default Creators;
