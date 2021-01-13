import React from "react";
import Icon from "../../images/stock.svg";
import Icon2 from "../../images/aastha.svg";
import Icon3 from "../../images/haiying.svg";
import Icon4 from "../../images/lucy.svg";
import Icon5 from "../../images/olivia.svg";
import Icon6 from "../../images/vivi.svg";
import Icon7 from "../../images/cindy.svg";

import {
    DiscoverContainer,
    DiscoverH1,
    DiscoverSubtitle,
    DiscoverWrapper,
    DiscoverCard,
    DiscoverIcon,
    DiscoverH2,
    DiscoverP,
} from "./DiscoverElements";

const Discover = () => {
    return (
        <DiscoverContainer id="Discover">
            <DiscoverWrapper>
                <DiscoverCard>
                    <DiscoverIcon src={Icon} />
                    <DiscoverH2>Discover and save shows</DiscoverH2>
                </DiscoverCard>
                <DiscoverCard>
                    <DiscoverIcon src={Icon} />
                    <DiscoverH2>Share between friends</DiscoverH2>
                </DiscoverCard>
            </DiscoverWrapper>
        </DiscoverContainer>
    );
};

export default Discover;
