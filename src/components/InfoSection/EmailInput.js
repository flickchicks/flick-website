import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { COLORS } from "../../Colors"

const Input = styled.input`
  display: inline-block;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${COLORS.mediumGray};
  color: ${COLORS.darkBlue};
  margin-right: 5%;
  margin-bottom: 12px;
  max-width: 400px;
  min-width: 220px;
  width: 60%;
  font-size: 1.2em;
  @media screen and (max-width: 600px) {
    display: block;
    width: 100%;
  }
`
const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  color: ${COLORS.darkBlueGray};
`
const Submit = styled.button`
  display: inline-block;
  background-color: ${({ disabled }) =>
    disabled ? COLORS.disabledPurpleLight : COLORS.lightPurple};
  padding: 12px;
  margin-bottom: 12px ;
  border-radius: 40px;
  border: 1px solid ${({ disabled }) =>
    disabled ? COLORS.disabledPurple : COLORS.darkPurple} ;
  color: ${({ disabled }) =>
    disabled ? COLORS.disabledPurple : COLORS.darkPurple};
  font-weight: 900;
  font-size: 14px;
  width: 25%;
  text-align: center;
  min-width: 130px;
  box-sizing: content-box
`
const Warning = styled.p`
  font-size: 12px;
  color: #DA0F33;
  display: block;
`

class EmailInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submitted: false, error: false };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const scriptURL = "https://script.google.com/macros/s/AKfycbytII_T9vf2ck4xbwESfmvjzUNv8_KJ3j5E-139XEO4Kl_H5IWN2FMB/exec"
    fetch(scriptURL, { method: 'POST', body: new FormData(this.form) })
      .then(response => {
        if (response.status === 200) {
          this.setState({ submitted: true })
          this.form.reset();
        } else {
          this.setState({ error: true })
        }
      })
      .catch(error => this.setState({ error: true }))
  }

  render() {
    const { submitted, error } = this.state
    const requestedText = submitted ? "Requested" : "Request an invite"

    return (
      <form ref={form => this.form = form}>
        <div>
          <Label htmlFor="Email">Your Email</Label>
          <Input id="Email" name="Email" type="email"></Input>
          <Submit type="submit" onClick={submitted ? null : this.handleSubmit} disabled={submitted}>{requestedText}</Submit>
          <Warning>{error && "Something went wrong. Please try again."}</Warning>
        </div>
      </form>
    )
  }
}

export default EmailInput
