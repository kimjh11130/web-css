import React, { useState } from "react";
import styled from "styled-components";

const navItems = [
  { title: "ES6", left: "0vw", id: "#ES6" },
  { title: "Flexbox", left: "20vw", id: "#Flexbox" },
  { title: "React", left: "40vw", id: "#React" },
  { title: "Angular", left: "60vw", id: "#Angular" },
  { title: "Other", left: "80vw", id: "#Other" },
];

const mains = [
  { title: "E S 6", content: "something about es6", id: "ES6" },
  { title: "F l e x b o x", content: "something about flexbox", id: "Flexbox" },
  { title: "R e a c t", content: "something about react", id: "React" },
  { title: "A n g u l a r", content: "something about angular", id: "Angular" },
  { title: "O t h e r", content: "something about Other", id: "Other" },
];

const high = [950, 1800, 2650, 3500, 4300];

const StickySliderNav = () => {
  const [location, setLoaction] = useState("0vh");
  const current = window.pageYOffset;
  window.addEventListener("scroll", () => {
    if (current >= 0 && current < high[1]) setLoaction(navItems[0].left);
    else if (current >= high[1] && current < high[2])
      setLoaction(navItems[1].left);
    else if (current >= high[2] && current < high[3])
      setLoaction(navItems[2].left);
    else if (current >= high[3] && current < high[4])
      setLoaction(navItems[3].left);
    else setLoaction(navItems[4].left);
  });

  const onClickkkk = (e: any) => {
    const { id } = e.target;
    switch (id) {
      case "ES6":
        window.scrollTo({ top: high[0], left: 0, behavior: "smooth" });
        return setLoaction("0vw");

      case "Flexbox":
        window.scrollTo({ top: high[1], left: 0, behavior: "smooth" });
        return setLoaction("20vw");

      case "React":
        window.scrollTo({ top: high[2], left: 0, behavior: "smooth" });
        return setLoaction("40vw");

      case "Angular":
        window.scrollTo({ top: high[3], left: 0, behavior: "smooth" });
        return setLoaction("60vw");

      case "Other":
        window.scrollTo({ top: high[4], left: 0, behavior: "smooth" });
        return setLoaction("100vw");

      default:
        return null;
    }
  };

  return (
    <>
      <MainBox>
        <Title>S T I C K Y &nbsp; S L I D E R &nbsp; N A V</Title>
        <Content>Sliding contnet with sticky tab nav</Content>
      </MainBox>

      <Nav>
        {navItems.map((item) => (
          <Item
            key={item.title}
            id={item.title}
            onClick={onClickkkk}
            href={item.id}
          >
            {item.title}
          </Item>
        ))}
        <NavBar left={location} />
      </Nav>

      {mains.map((item) => (
        <MainBox key={item.title} id={item.id}>
          <Title>{item.title}</Title>
          <Content>{item.content}</Content>
        </MainBox>
      ))}
    </>
  );
};

export default StickySliderNav;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
  background-color: ${(props) => props.theme.StickySliderNav.bgColor};
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Content = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;
const Nav = styled.nav`
  width: 100vw;
  height: 10vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: white;
  position: sticky;
  top: 0;
`;

const Item = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  transition: all 0.3s ease-in-out;
  color: black;
  text-decoration: none;
  &:hover {
    background-color: ${(props) => props.theme.StickySliderNav.highLightColor};
    color: white;
  }
`;

const NavBar = styled.div<{ left: string }>`
  background-color: ${(props) => props.theme.StickySliderNav.lineColor};
  width: 20vw;
  height: 10px;
  position: absolute;
  bottom: 0;
  left: ${(props) => props.left};
  transition: left 0.2s ease-in-out;
`;
