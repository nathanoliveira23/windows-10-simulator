import styled from "styled-components";

export const Container = styled.div`
  height: 40px;
  width: 100%;

  position: absolute;
  bottom: 0;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  width: 100%;

  background-color: rgba(32, 32, 36, 0.9);

  div {
    height: 100%;

    display: flex;
    align-items: center;
  }

  .controls {
    button {
      padding: 4px;
    }
  }
`