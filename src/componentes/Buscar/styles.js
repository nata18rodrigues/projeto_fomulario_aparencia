import styled from "styled-components";

export const Container = styled.div`
  position: absolute;

  left: 0;
  top: 0;

  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.7);
`;

export const Menu = styled.div`
  position: absolute;

  top: 0;
  right: 0;

  background-color: #fff;
  padding: 0 15px;

  font-family: sans-serif;

  width: 25%;
  height: 100vh;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 15px 0;

    > h4 {
      margin: 0;
      text-transform: uppercase;
      width: 100%;
      text-align: center;
    }

    > button {
      border: none;
      background: transparent;
      font-weight: bold;

      cursor: pointer;
    }
  }
`;
