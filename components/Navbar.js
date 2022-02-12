import styled from "styled-components";
import styles from "./DinNextFont.module.css";

function Navbar() {
  return (
    <NavbarContainer className={styles.customFont}>
      <NavbarItems>News + Blog</NavbarItems>
      <NavbarItems>Videos</NavbarItems>
      <NavbarItems>Films</NavbarItems>
      <NavbarItems>Series</NavbarItems>
      <NavbarItems>Interactive</NavbarItems>
      <NavbarItems>Community</NavbarItems>
      <NavbarItems>Databank</NavbarItems>
      <NavbarItems>Disney+</NavbarItems>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  font-family: "Din Next";
  font-size: 15px;
  top: 18%;
  width: 100%;

  background-color: black;
  border-top: solid 0.1px gray;
  border-bottom: solid 0.1px gray;
  z-index: 2;
`;

const NavbarItems = styled.h4`
  display: inline-flex;
  align-items: center;
  color: gray;
  background-color: black;
  border-top: none;
  border-bottom: none;
  /* border-left: solid white 0.3px; */
  border-right: solid gray 0.1px;
  padding: 1% 2%;
  text-transform: uppercase;
  transition: ease 0.4s;
  cursor: pointer;
  &:first-child {
    border-left: solid 0.1px gray;
  }
  &:hover {
    color: white;
  }
`;
