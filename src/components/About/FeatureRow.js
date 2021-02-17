import React from "react";
import styled from "styled-components";


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
const FeatureImage = styled.img`
  width: 90%
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
`

class FeatureRow extends React.Component {

  render() {
    console.log(this.props.image);
    return (
      <FeatureContainer>
        <FeatureImageWrapper>
          <FeatureImage src={this.props.image} />
        </FeatureImageWrapper>

        <FeatureDescriptionWrapper>
          <FeatureIcon src={this.props.icon} />
          <FeatureDescription>
            <h2 className={"featureHeader"}>{this.props.header}</h2>
            <h4>{this.props.body}</h4>
          </FeatureDescription>
        </FeatureDescriptionWrapper>
      </FeatureContainer>
    )
  }
}

export default FeatureRow