import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  color: #FFF;

  width: 100%;
  height: 100%;

  border: none;
  background-color: transparent;

  margin-top: 10px;

  div {
    background-color: #03A9F4;
    padding: 5px;
  }

  &:hover {
    background-color: #222;
  }
`