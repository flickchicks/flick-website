import React from "react";
import DiscoverImage from "../../images/discover preview.png";
import DiscoverIcon from "../../images/discover icon.png"
import GroupsImage from "../../images/groups preview.png";
import GroupsIcon from "../../images/groups icon.png"
import SuggestImage from "../../images/suggest preview.png";
import SuggestIcon from "../../images/suggest icon.png"
import FeatureRow from "./FeatureRow.js";

const groupsHeader = "Decide on your group’s next binge together"
const groupsDescription = "Add ideas and put them to a vote, anonymous and free of judgement"
const discoverHeader = "Discover and save content"
const discoverDescription = "Keep note of the movies and shows you’ve loved, hated, and everything in between with fully customizable lists"
const suggestHeader = "Send between friends"
const suggestDescription = "Bond over content by sharing your thoughts or suggestions"

class About extends React.Component {


    render() {
        return (
            <div>
                <FeatureRow image={GroupsImage} icon={GroupsIcon} header={groupsHeader} body={groupsDescription} />
                <FeatureRow image={DiscoverImage} icon={DiscoverIcon} header={discoverHeader} body={discoverDescription} />
                <FeatureRow image={SuggestImage} icon={SuggestIcon} header={suggestHeader} body={suggestDescription} />

            </div>
        );
    }

};

export default About;
