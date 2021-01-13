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
    CreatorsWrapper,
    CreatorsCard,
    CreatorsIcon,
    CreatorsH2,
    CreatorsP,
} from "./CreatorsElements";

const Creators = () => {
    return (
        <CreatorsContainer id="Creators">
            <CreatorsH1>Made by</CreatorsH1>
            <CreatorsWrapper>
                <CreatorsCard>
                    <CreatorsIcon src={Icon1} />
                    {/* <CreatorsH2>Reduce expenses</CreatorsH2>
                    <CreatorsP>
                        We help reduce your fees and increase your overall
                        revenue.
                    </CreatorsP> */}
                </CreatorsCard>
                <CreatorsCard>
                    <CreatorsIcon src={Icon2} />
                    {/* <CreatorsH2>Virtual Offices</CreatorsH2>
                    <CreatorsP>
                        You can access our platform online anywhere in the
                        world.
                    </CreatorsP> */}
                </CreatorsCard>
                <CreatorsCard>
                    <CreatorsIcon src={Icon3} />
                    {/* <CreatorsH2>Premium Benefits</CreatorsH2>
                    <CreatorsP>
                        Unlock our special membership card that returns 5% cash
                        back.
                    </CreatorsP> */}
                </CreatorsCard>
                <CreatorsCard>
                    <CreatorsIcon src={Icon4} />
                </CreatorsCard>
                <CreatorsCard>
                    <CreatorsIcon src={Icon5} />
                </CreatorsCard>
                <CreatorsCard>
                    <CreatorsIcon src={Icon6} />
                </CreatorsCard>
                <CreatorsCard>
                    <CreatorsIcon src={Icon7} />
                </CreatorsCard>
            </CreatorsWrapper>
        </CreatorsContainer>
    );
};

export default Creators;
