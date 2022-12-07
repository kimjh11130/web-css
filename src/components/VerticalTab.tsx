import React from "react";
import styled from "styled-components";

const VerticalTab = () => {
  return (
    <Wrapper>
      <TabMenus>
        <TabMenu>Code</TabMenu>
        <TabMenu>About</TabMenu>
        <TabMenu>Services</TabMenu>
        <TabMenu>Content</TabMenu>
      </TabMenus>
      <Divide />
      <div> asdfl;kjasdfl;dfasj</div>
    </Wrapper>
  );
};

export default VerticalTab;

const Wrapper = styled.div`
  width: 690px;
  height: 360px;
  display: grid;
  grid-template-columns: 1fr 1px 2.5fr;
  background-color: white;
`;

const TabMenus = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  color: ${({ theme }) => theme.textColor};
`;

const TabMenu = styled.div`
  height: 50px;
  font-weight: 600;
`;

const Divide = styled.hr`
  height: 300px;
  margin: auto;
`;
