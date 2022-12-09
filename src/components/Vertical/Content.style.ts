import styled, { keyframes } from "styled-components";

const animate = keyframes`
  from{
    transform: scale(0.9);
  }
  to{
    transform: scale(1)
  }
`

export const Contant = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${animate} linear 0.5s;
`;

export const Icon = styled.div`
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.vertical.iconColor};
  border-radius: 30px;
  color: white;
  font-size: 30px;
`;

export const Title = styled.h2`
  margin: 10px;
`;

export const Overview = styled.div`
  margin: 15px 25px;
`;
