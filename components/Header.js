import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>Left Header</HeaderLeft>
      <HeaderCenter>Center Header</HeaderCenter>
      <HeaderRight>Right Header</HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 18%;
  z-index: 10;
`;
const HeaderChilds = styled.div`
  display: flex;
  color: white;
  flex-grow: 1;
`;
const HeaderLeft = styled(HeaderChilds)``;
const HeaderCenter = styled(HeaderChilds)``;
const HeaderRight = styled(HeaderChilds)``;
