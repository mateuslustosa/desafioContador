import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid red;
  width: 50%;
  height: 20vh;
  margin: 20px;
`;

const Button = styled.button`
  width: 20px;
  background-color: pink;
  border: none;
`;

const H1 = styled.h1`
  color: yellow;
`;

export default class Contador extends Component {
  state = {
    number: 0
  };

  add = () => {
    if (this.state.number < 10) {
      this.setState({
        number: this.state.number + 1
      });
    }
  };

  remove = () => {
    if (this.state.number > 10) {
      this.setState({
        number: this.state.number - 1
      });
    }
  };

  render() {
    return (
      <Div>
        <GlobalStyle />
        <Button
          onClick={() => {
            this.add();
          }}
        >
          +
        </Button>
        <H1>{this.state.number}</H1>
        <Button
          onClick={() => {
            this.remove();
          }}
        >
          -
        </Button>
      </Div>
    );
  }
}
