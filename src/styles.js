import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
export const Heading = styled.h1`
  text-align: center;
  font-size: 50px;
  color: purple;
`;
export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const MovieWrapper = styled.div`
  margin: 20px;
  img {
    width: 50px;
    height: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  p {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-size: 50;
  }
`;
export const GlobalStyle = createGlobalStyle`
  body {
    color: #242424;
    background-color: "purple"
  }
`;
export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
  }
  p {
    vertical-align: middle;
  }
`;
