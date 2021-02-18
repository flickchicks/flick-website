import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";


const Input = styled.input`
  display: inline-block;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #BABACA;
  margin-right: 5%;
  max-width: 400px;
  min-width: 220px;
  width: 60%;
  font-size: 1.25em;
  margin-bottom: 12px;
  @media screen and (max-width: 600px) {
    display: block;
    width: 100%;
  }
`
const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  color: #3F3A58;
`
const Submit = styled.button`
  display: inline-block;
  background-color: #E8E2FF;
  padding: 12px;
  border-radius: 40px;
  border: 1px solid #2B25A6;
  color: #2B25A6;
  font-weight: 900;
  font-size: 14px;
  width: 25%;
  text-align: center;
  min-width: 120px;
  box-sizing: content-box
`

class EmailInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Email: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ Email: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const scriptURL = "https://script.google.com/macros/s/AKfycbytII_T9vf2ck4xbwESfmvjzUNv8_KJ3j5E-139XEO4Kl_H5IWN2FMB/exec"
    fetch(scriptURL, { method: 'POST', body: new FormData(this.form) })
      .then(response => console.log("success", response))
      .catch(error => console.log('error', error.message))
  }

  render() {
    return (
      <form ref={form => this.form = form}>
        <div>
          <Label htmlFor={"Email"}>Your Email</Label>
          <Input id={"Email"} name={"Email"} type={"Email"} onChange={this.handleChange}></Input>

          <Submit type="submit" onClick={this.handleSubmit}>Request an invite</Submit>
        </div>
      </form>
    )
  }
}

export default EmailInput
