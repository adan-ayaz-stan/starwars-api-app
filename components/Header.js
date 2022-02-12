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
  width: 100%;
`;
const HeaderChilds = styled.div`
  display: flex;
  width: 100%;
`;
const HeaderLeft = styled(Header)``;
const HeaderCenter = styled(Header)``;
const HeaderRight = styled(Header)``;
