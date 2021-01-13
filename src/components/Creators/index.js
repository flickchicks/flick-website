import React from "react";
import Icon1 from "../../images/alanna.svg";
import Icon2 from "../../images/aastha.svg";
import Icon3 from "../../images/haiying.svg";
import Icon4 from "../../images/lucy.svg";
import Icon5 from "../../images/olivia.svg";
import Icon6 from "../../images/vivi.svg";
import Icon7 from "../../images/cindy.svg";

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
            <CreatorsWrapper>
                <CreatorsCard>
                    <CreatorsIcon src={Icon1} />
                    <CreatorsH2>Alanna</CreatorsH2>
                    <CreatorsP>Backend Engineer</CreatorsP>
                </CreatorsCard>
                <CreatorsCard>
                    <CreatorsIcon src={Icon2} />
                    <CreatorsH2>Aastha</CreatorsH2>
                    <CreatorsP>Android Engineer</CreatorsP>
                </CreatorsCard>
                <CreatorsCard>
                    <CreatorsIcon src={Icon3} />
                    <CreatorsH2>Haiying</CreatorsH2>
                    <CreatorsP>iOS Engineer</CreatorsP>
                </CreatorsCard>
                <CreatorsCard>
                    <CreatorsIcon src={Icon4} />
                    <CreatorsH2>Lucy</CreatorsH2>
                    <CreatorsP>iOS Engineer</CreatorsP>
                </CreatorsCard>
                <CreatorsCard>
                    <CreatorsIcon src={Icon5} />
                    <CreatorsH2>Olivia</CreatorsH2>
                    <CreatorsP>Backend Engineer</CreatorsP>
                </CreatorsCard>
                <CreatorsCard>
                    <CreatorsIcon src={Icon6} />
                    <CreatorsH2>Vivi</CreatorsH2>
                    <CreatorsP>Backend Engineer</CreatorsP>
                </CreatorsCard>
                <CreatorsCard>
                    <CreatorsIcon src={Icon7} />
                    <CreatorsH2>Cindy</CreatorsH2>
                    <CreatorsP>Designer</CreatorsP>
                </CreatorsCard>
            </CreatorsWrapper>
        </CreatorsContainer>
    );
};

export default Creators;
