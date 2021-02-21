import React from "react";
import styled from "styled-components";
import SmoothImage from 'react-smooth-image';



const FeatureContainer = styled.div`
  display: flex;
  width: 75%;
  max-width: 1200px;
  margin: 50px auto;

  @media screen and (max-width: 770px) {
    display: block;
    width: 80%;
  }
  @media screen and (max-width: 500px) {
    display: block;
    width: 90%;
  }
`
const FeatureImageWrapper = styled.div`
  width: 50%;
  padding: 20px;
  @media screen and (max-width: 770px) {
    width: 75%;
    margin: auto;
  }
  @media screen and (max-width: 500px) {
    display: block;
    width: 100%;
  }
`

const FeatureDescriptionWrapper = styled.div`
  display: block;
  width: 50%;
  padding: 20px;
  @media screen and (max-width: 770px) {
    width: 75%;
    margin: auto;
  }
  @media screen and (max-width: 500px) {
    display: block;
    width: 100%;
  }
`
const FeatureDescription = styled.div`
  display:flex;
  flex-direction: column;
  align-items: start;
  margin-top: 20px;
`
const FeatureIcon = styled.img`
  max-width: 100px;
  margin-top: 40px;
  @media screen and (max-width: 500px) {
    display: block;
    margin-top: 0;
    width: 100%;
  }
`

class FeatureRow extends React.Component {

  render() {
    return (
      <FeatureContainer>
        <FeatureImageWrapper>
          <SmoothImage src={this.props.image} alt={this.props.imgAlt} containerStyles={{
            position: "static",
            width: "auto",
            height: "auto",
            overflow: "auto",
            paddingBottom: 0,
            backgroundSize: "cover",
            transitionProperty: "opacity",
            transitionDuration: "1s",
            transitionTimingTunction: "ease-in"
          }} imageStyles={{ width: "100%", position: "static", filter: "drop-shadow(0px 8px 20px rgba(60, 57, 114, 0.2))" }} transitionTime={1.0} />
        </FeatureImageWrapper>

        <FeatureDescriptionWrapper>
          <FeatureIcon src={this.props.icon} alt={this.props.iconAlt} />
          <FeatureDescription>
            <h2 className={"featureHeader"}>{this.props.header}</h2>
            <h3>{this.props.body}</h3>
          </FeatureDescription>
        </FeatureDescriptionWrapper>
      </FeatureContainer>
    )
  }
}

export default FeatureRow

