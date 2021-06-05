import styled from "styled-components";

export const Button = styled.button`
  min-height: 5%;
  min-width: 5%;
  width: 100%;
  height: auto;
  /* display: flex;
  align-items: stretch; */
  padding: 15px 30px;
  background-color: ${(props) => props.backgroundColor};
  color: #130900;
  color: #ecdede;
  font-weight: bold;
  border-radius: 10px;
  border-style: none;
  font-size: medium;
  position:absolute; 
  bottom:0;
  margin-left: -10px;
  &:hover {
    mix-blend-mode: difference;
  }
`;