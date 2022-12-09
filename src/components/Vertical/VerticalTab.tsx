import { useMemo, useState } from "react";
import styled from "styled-components";
import { FaCode, FaPenSquare, FaRegChartBar, FaEnvelope } from "react-icons/fa";
import Code from "./Code";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const VerticalTab = () => {
  const [tabName, setTabName] = useState("Code");
  const [location, setLocation] = useState("50px");
  const tabMenus = [
    { name: "Code", icon: <FaCode />, num: "50px" },
    { name: "About", icon: <FaPenSquare />, num: "100px" },
    { name: "Services", icon: <FaRegChartBar />, num: "150px" },
    { name: "Contact", icon: <FaEnvelope />, num: "200px" },
  ];

  const tabMenu = useMemo(() => {
    switch (tabName) {
      case "Code":
        return <Code />;
      case "About":
        return <About />;
      case "Services":
        return <Services />;
      case "Contact":
        return <Contact />;
      default:
        return <></>;
    }
  }, [tabName]);

  return (
    <Container>
      <Wrapper>
        <TabMenus>
          {tabMenus.map((item) => {
            const isActive = tabName === item.name ? true : false;
            return (
              <TabMenu
                key={item.num}
                onClick={() => {
                  setTabName(item.name);
                  setLocation(item.num);
                }}
                isActive={isActive}
                id={item.name}
              >
                {item.icon}
                {item.name}
              </TabMenu>
            );
          })}
        </TabMenus>

        <Divide>
          <TabBar top={location} />
        </Divide>
        {tabMenu}
      </Wrapper>
    </Container>
  );
};

export default VerticalTab;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.vertical.bgColor};
`;

const Wrapper = styled.div`
  width: 690px;
  height: 360px;
  display: grid;
  grid-template-columns: 1fr 1px 2.5fr;
  background-color: white;
  overflow: hidden;
`;

const TabMenus = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  color: ${(props) => props.theme.vertical.textColor};
`;

const TabMenu = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  height: 50px;
  font-weight: 700;
  color: ${(props) =>
    props.isActive
      ? props.theme.vertical.activeColor
      : props.theme.vertical.textColor};
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
  &:hover {
    color: ${(props) => props.theme.vertical.activeColor};
  }
`;

const Divide = styled.div`
  width: 0px;
  height: 300px;
  border: 0.3px solid ${(props) => props.theme.vertical.bgColor};
  margin: auto;
  position: relative;
`;

const TabBar = styled.div<{ top: string }>`
  width: 5px;
  height: 50px;
  background-color: ${(props) => props.theme.vertical.activeColor};
  position: absolute;
  right: -3px;
  top: ${(props) => props.top};
  transition: top 0.5s;
`;
