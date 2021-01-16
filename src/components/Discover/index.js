import React from "react";
import Icon from "../../images/discover1.png";
import Icon2 from "../../images/discover2.png";

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
        <DiscoverContainer id="discover">
            <DiscoverWrapper>
                <DiscoverCard>
                    <DiscoverIcon src={Icon} />
                    <DiscoverH2>Discover and save shows</DiscoverH2>
                </DiscoverCard>
                <DiscoverCard>
                    <DiscoverIcon src={Icon2} />
                    <DiscoverH2>Share between friends</DiscoverH2>
                </DiscoverCard>
            </DiscoverWrapper>
        </DiscoverContainer>
    );
};

export default Discover;
