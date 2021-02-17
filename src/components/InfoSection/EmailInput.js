import React from "react";
import styled from "styled-components";


const Input = styled.input`
  display: inline-block;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #BABACA;
  margin-right: 5%;
  max-width: 400px;
  min-width: 220px;
  width: 70%;
  font-size: 1.25em;
  margin-bottom: 12px;
`
const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  color: #3F3A58;
`
const Submit = styled.input`
display: inline-block;
  background-color: #E8E2FF;
  padding: 8px;
  border-radius: 40px;
  border: 1px solid #2B25A6;
  color: #2B25A6;
  font-weight: 700;
  width: 25%;
  text-align: center;
  min-width: 70px;
`

class EmailInput extends React.Component {
  render() {
    return (
      <form>
        <div>
          <Label for={"email"}>Your email</Label>
          <Input id={"email"} name={"email"} type={"email"}></Input>
          <Submit type="Submit"></Submit>
        </div>
      </form>
    )
  }
}

export default EmailInput
