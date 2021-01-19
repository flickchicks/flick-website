import React from "react";
import IconAlanna from "../../images/alanna.svg";
import IconAastha from "../../images/aastha.svg";
import IconHaiying from "../../images/haiying.svg";
import IconLucy from "../../images/lucy.svg";
import IconOlivia from "../../images/olivia.svg";
import IconVivi from "../../images/vivi.svg";
import IconCindy from "../../images/cindy.svg";
import IconGroupLarge from "../../images/groupLarge.svg";
import IconGroupMediumOne from "../../images/groupMediumOne.svg";
import IconGroupMediumTwo from "../../images/groupMediumTwo.svg";

import {
    CreatorsContainer,
    CreatorsH1,
    CreatorsSubtitle,
    CreatorsWrapper,
    CreatorsCard,
    CreatorsIcon,
    CreatorsH2,
    CreatorsP,
    TextWrapper,
    CreatorsIconGroupLarge,
    CreatorsIconGroupMedium,
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
            <CreatorsIconGroupLarge src={IconGroupLarge} />
            <CreatorsIconGroupMedium src={IconGroupMediumOne} />
            <CreatorsIconGroupMedium src={IconGroupMediumTwo} />

            <CreatorsWrapper>
                <CreatorsCard>
                    <CreatorsIcon src={IconAlanna} />
                    <CreatorsH2>Alanna</CreatorsH2>
                    <CreatorsP>Backend Developer</CreatorsP>
                </CreatorsCard>
                <CreatorsCard>
                    <CreatorsIcon src={IconVivi} />
                    <CreatorsH2>Vivi</CreatorsH2>
                    <CreatorsP>Backend Developer</CreatorsP>
                </CreatorsCard>
                <CreatorsCard>
                    <CreatorsIcon src={IconOlivia} />
                    <CreatorsH2>Olivia</CreatorsH2>
                    <CreatorsP>Backend Developer</CreatorsP>
                </CreatorsCard>
                <CreatorsCard>
                    <CreatorsIcon src={IconHaiying} />
                    <CreatorsH2>Haiying</CreatorsH2>
                    <CreatorsP>iOS Developer</CreatorsP>
                </CreatorsCard>
                <CreatorsCard>
                    <CreatorsIcon src={IconLucy} />
                    <CreatorsH2>Lucy</CreatorsH2>
                    <CreatorsP>iOS Developer</CreatorsP>
                </CreatorsCard>
                <CreatorsCard>
                    <CreatorsIcon src={IconAastha} />
                    <CreatorsH2>Aastha</CreatorsH2>
                    <CreatorsP>Android Developer</CreatorsP>
                </CreatorsCard>

                <CreatorsCard>
                    <CreatorsIcon src={IconCindy} />
                    <CreatorsH2>Cindy</CreatorsH2>
                    <CreatorsP>Designer</CreatorsP>
                </CreatorsCard>
            </CreatorsWrapper>
        </CreatorsContainer>
    );
};

export default Creators;
