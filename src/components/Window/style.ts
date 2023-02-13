import styled from "styled-components";

export const WindowC = styled.div`
  width: 800px;
  height: 600px;

  background-color: white;

  margin-left: 100px;
  margin-top: 30px;

  box-shadow: 1px 1px 8px;
`

export const TitleBar = styled.div`
  height: 30px;
  width: 100%;

  padding-inline-start: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 30px);

  background-color: gray;
`

// export const Navigation = styled.div`
//   width: 100%;
//   height: 30px;

//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   border-bottom: 1px solid black;

//   nav {
//     display: flex;
//     align-items: center;

//     height: 100%;

//     a {
//       display: flex;
//       align-items: center;

//       height: 100%;
      
//       cursor: default;
//       padding-inline: 18px;

//       &:first-child {
//         background-color: bisque;
//       }
//     }
//   }

//   .details {
//     display: flex;
//     align-items: center;
//     gap: 8px;

//     padding-inline: 4px;
//   }
// `