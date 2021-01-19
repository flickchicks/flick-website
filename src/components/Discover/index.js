import React from "react";
import Icon from "../../images/discover1.png";
import Icon2 from "../../images/discover2.png";

import {
    DiscoverContainer,
    DiscoverWrapper,
    DiscoverCard,
    DiscoverIcon,
    DiscoverText,
} from "./DiscoverElements";

const Discover = () => {
    return (
        <DiscoverContainer id="discover">
            <DiscoverWrapper>
                <DiscoverCard>
                    <DiscoverIcon src={Icon} />
                    <DiscoverText>Discover and save shows</DiscoverText>
                </DiscoverCard>
                <DiscoverCard>
                    <DiscoverIcon src={Icon2} />
                    <DiscoverText>Share between friends</DiscoverText>
                </DiscoverCard>
            </DiscoverWrapper>
        </DiscoverContainer>
    );
};

export default Discover;
