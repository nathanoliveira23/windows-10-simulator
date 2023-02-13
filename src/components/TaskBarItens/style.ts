import styled from "styled-components";

export const Itens = styled.button `
  display: flex;
  align-items: center;

  border: none;

  padding-inline: 12px;

  background-color: inherit;
  color: white;

  height: 100%;

  &:hover {
      background-color: #566B72;
  }

  img {
    height: 90%;
    width: 100%;
  }
`