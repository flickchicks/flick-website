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
    CreatorCard,
    CreatorIcon,
    CreatorName,
    CreatorRole,
    TextWrapper,
    CreatorIconGroupLarge,
    CreatorIconGroupMedium,
    CreatorLabelGroupLarge,
    CreatorLabelGroupMedOne,
    CreatorLabelGroupMedTwo,
    CreatorIconWrapper,
    CreatorsIndividualWrapper,
    CreatorLink
} from "./CreatorsElements";

const data = [
    {
        name: "Alanna",
        role: "Backend Developer",
        link: "https://www.linkedin.com/in/alanna-zhou/",
        image: IconAlanna
    },
    {
        name: "Aastha",
        role: "Android Developer",
        link: "https://www.linkedin.com/in/aastha-shah-9b2142149/",
        image: IconAastha
    },
    {
        name: "Haiying",
        role: "iOS Developer",
        link: "https://www.linkedin.com/in/haiying-weng-790687155/",
        image: IconHaiying
    },
    {
        name: "Lucy",
        role: "iOS Developer",
        link: "https://www.linkedin.com/in/lucylixu/",
        image: IconLucy
    },
    {
        name: "Olivia",
        role: "Backend Developer",
        link: "https://www.linkedin.com/in/yue-li-7a1350193/",
        image: IconOlivia
    },
    {
        name: "Vivi",
        role: "Backend Developer",
        link: "https://www.linkedin.com/in/yuwei-vivi-ye/",
        image: IconVivi
    },
    {
        name: "Cindy",
        role: "Designer",
        link: "https://www.linkedin.com/in/cindyhuang-/",
        image: IconCindy
    },
]

const Creators = () => {
    return (
        <CreatorsContainer id="creators">
            <CreatorsH1>Made by</CreatorsH1>
            <TextWrapper>
                <CreatorsSubtitle>
               
                    Seven friends at Cornell who like to talk about shows instead of work. After being separated by quarantine, we wanted to help people connect and have fun through movies and shows, what we all love!
                
                </CreatorsSubtitle>
            </TextWrapper>
            {/* Full width: One row */}
            <CreatorIconWrapper>
                <CreatorIconGroupLarge src={IconGroupLarge} />
                <CreatorLabelGroupLarge>
                    {
                        data.map(person => {
                            return (
                                <CreatorCard>
                                    <CreatorLink href={person.link} target="_blank"><CreatorName>{person.name}</CreatorName></CreatorLink>
                                    <CreatorRole>{person.role}</CreatorRole>
                                </CreatorCard>
                            )

                        })
                    }
                </CreatorLabelGroupLarge>
            </CreatorIconWrapper>

            {/* Medium width: Two rows */}
            <CreatorIconWrapper>
                <CreatorIconGroupMedium src={IconGroupMediumOne} />
                <CreatorLabelGroupMedOne>
                    {
                        data.slice(0, 4).map(person => {
                            return (
                                <CreatorCard>
                                    <CreatorLink href={person.link} target="_blank"><CreatorName>{person.name}</CreatorName></CreatorLink>
                                    <CreatorRole>{person.role}</CreatorRole>
                                </CreatorCard>
                            )

                        })
                    }
                </CreatorLabelGroupMedOne>
            </CreatorIconWrapper>

            <CreatorIconWrapper>
                <CreatorIconGroupMedium src={IconGroupMediumTwo} />
                <CreatorLabelGroupMedTwo >
                    {
                        data.slice(4, 7).map(person => {
                            return (
                                <CreatorCard>
                                    <CreatorLink href={person.link} target="_blank"><CreatorName>{person.name}</CreatorName></CreatorLink>
                                    <CreatorRole>{person.role}</CreatorRole>
                                </CreatorCard>
                            )

                        })
                    }
                </CreatorLabelGroupMedTwo>
            </CreatorIconWrapper>

            {/* Small width: Individual rows */}
            <CreatorsIndividualWrapper>
                {
                    data.map(person => {
                        return (
                            <CreatorCard>
                                <CreatorIcon src={person.image} />
                                <CreatorLink href={person.link} target="_blank"><CreatorName>{person.name}</CreatorName></CreatorLink>
                                <CreatorRole>{person.role}</CreatorRole>
                            </CreatorCard>
                        )

                    })
                }
            </CreatorsIndividualWrapper>

        </CreatorsContainer>
    );
};

export default Creators;
