import React from "react";
import styled from "styled-components";
import { COLORS } from "../../Colors"

const Input = styled.input`
  display: inline-block;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${COLORS.lightGray};
  color: ${COLORS.darkBlue};
  margin-right: 20px;
  margin-bottom: 12px;
  min-width: 220px;
  width: calc(70% - 60px);
  font-size: 1.2em;
  transition: 0.4s ease;

  @media screen and (max-width: 600px) {
    display: block;
    width: 100%;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${COLORS.darkBlueGray};
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
  width: calc(30% - 60px);
  text-align: center;
  min-width: 130px;
  box-sizing: content-box;
  transition: 0.4s ease;

  &:focus {
    outline: none;
    background-color: #ddd5fb;
  }
  &:hover {
    cursor: ${({ disabled }) => disabled ? "default" : "pointer"}
  }
`
const Warning = styled.p`
font-size: 12px;
color: #DA0F33;
display: block;
`

class EmailInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submitted: false, error: false, input: "", invalidEmail: false };
  }

  validateInput = () => {
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.input))) {
      this.setState({ invalidEmail: true, submitted: false })
      return true
    }
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.validateInput()) {
      const scriptURL = "https://script.google.com/macros/s/AKfycbytII_T9vf2ck4xbwESfmvjzUNv8_KJ3j5E-139XEO4Kl_H5IWN2FMB/exec"
      const data = new FormData(this.form)
      data.append('Timestamp', new Date())
      fetch(scriptURL, { method: 'POST', body: data })
        .then(response => {
          if (response.status === 200) {
            this.setState({ submitted: true, error: false, invalidEmail: false })
            this.form.reset();
          } else {
            this.setState({ error: true })
          }
        })
        .catch(error => this.setState({ error: true }))
    }
  }

  render() {
    const { submitted, error, invalidEmail } = this.state
    const requestedText = submitted ? "Requested" : "Request an invite"
    return (
      <form ref={form => this.form = form}>
        <div>
          <Label htmlFor="Email">Your Email</Label>
          <Input id="Email" name="Email" type="email" onChange={this.handleChange}></Input>
          <Submit type="submit" onClick={submitted ? null : this.handleSubmit} disabled={submitted}>{requestedText}</Submit>
          <Warning><span>{error && "Something went wrong. Please try again. "}</span> <span>{invalidEmail && "Please enter a valid email address."}</span></Warning>
        </div>
      </form>
    )
  }
}

export default EmailInput
