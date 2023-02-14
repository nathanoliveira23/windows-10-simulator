import styled from "styled-components";

export const MenuC = styled.div`
  display: grid;
  grid-template-columns: 50px 250px 1fr;

  height: 600px;
  width: max-content;

  padding: 10px 10px 0 0;
  // top right bottom left

  position: absolute;
  bottom: 40px;
  left: 0;

  background-color: rgba(23, 23, 23, 0.9);
`

export const Controls = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  button {
    width: 100%;
    height: 60px;
  }
`

export const Programs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;

  padding-top: 10px;
  padding-left: 10px;

  overflow-y: auto;
`

export const GridApp = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;

  grid-gap: 4px;
`