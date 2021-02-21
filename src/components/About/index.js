import React from "react";
import DiscoverImage from "../../images/discover preview.png";
import DiscoverIcon from "../../images/discover icon.svg"
import GroupsImage from "../../images/groups preview.png";
import GroupsIcon from "../../images/groups icon.svg"
import SuggestImage from "../../images/suggest preview.png";
import SuggestIcon from "../../images/suggest icon.svg"
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
            <div id="about">
                <FeatureRow image={GroupsImage} icon={GroupsIcon} header={groupsHeader} body={groupsDescription} imgAlt="Telie groups mockups" iconAlt="Couch icon" />
                <FeatureRow image={DiscoverImage} icon={DiscoverIcon} header={discoverHeader} body={discoverDescription} imgAlt="Telie profile and list mockups" iconAlt="Search icon" />
                <FeatureRow image={SuggestImage} icon={SuggestIcon} header={suggestHeader} body={suggestDescription} imgAlt="Telie suggestions mockups" iconAlt="Suggestions icon" />

            </div>
        );
    }

};

export default About;
