import styled from "styled-components";

export const WndButtons = styled.div`
  display: flex;
  align-items: center;

  height: 100%;

  button {
    background-color: inherit;

    height: 100%;

    padding-inline: 10px;
    border: none;

    &:not(&:last-child):hover {
      background-color: lightgray;
    }

    &:last-child:hover {
      background-color: tomato;
    }
  }
`