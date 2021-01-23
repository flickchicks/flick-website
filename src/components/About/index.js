import React from "react";
import Icon from "../../images/about1.png";
import Icon2 from "../../images/about2.png";

import {
    AboutContainer,
    AboutWrapper,
    AboutCard,
    AboutIcon,
    AboutText,
} from "./AboutElements";

const About = () => {
    return (
        <AboutContainer id="about">
            <AboutWrapper>
                <AboutCard>
                    <AboutIcon src={Icon} />
                    <AboutText>Discover and save shows</AboutText>
                </AboutCard>
                <AboutCard>
                    <AboutIcon src={Icon2} />
                    <AboutText>Share between friends</AboutText>
                </AboutCard>
            </AboutWrapper>
        </AboutContainer>
    );
};

export default About;
