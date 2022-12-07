import React from "react";
import styled from "styled-components";
import VerticalTab from "./components/VerticalTab";

function App() {
  return (
    <Container>
      <VerticalTab />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({theme}) => theme.bgColor};
`;
