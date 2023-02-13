import styled from "styled-components";

export const MenuC = styled.div`
  display: grid;
  grid-template-columns: 50px 250px 1fr;

  height: 600px;
  width: 600px;

  position: absolute;
  bottom: 40px;
  left: 0;

  background-color: #171717;
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