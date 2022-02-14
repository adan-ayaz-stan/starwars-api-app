import Link from "next/link";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <SocialLinks></SocialLinks>
      </HeaderLeft>
      <HeaderCenter>
        <Link href="/">
          <a>
            <img
              src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
              alt=""
            />
          </a>
        </Link>
      </HeaderCenter>
      <HeaderRight>
        <HeaderSearch>
          <input placeholder="Search Star Wars" />
          <img
            src="https://static-mh.content.disney.io/starwars/assets/navigation/icon_search-957a123fdb62.svg"
            alt=""
          />
        </HeaderSearch>
        <HeaderActions>
          <button>LOG IN</button>
          <button>SIGN UP</button>
        </HeaderActions>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background-color: black;
  padding: 0 5vw;
  width: 100%;
  height: 18%;
  z-index: 10;
`;
const HeaderChilds = styled.div`
  display: flex;
  color: white;
`;
const HeaderLeft = styled(HeaderChilds)`
  display: flex;
  justify-content: center;
`;
const HeaderCenter = styled(HeaderChilds)`
  justify-content: center;
  align-items: center;

  > a > img {
    object-fit: contain;
    height: 180px;
    margin-top: -40px;
    margin-bottom: -20px;
    filter: invert(1);
  }
`;
const HeaderRight = styled.div`
  display: flex;
  margin-right: 8vw;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const HeaderSearch = styled.div`
  width: 26px;
  min-width: 26px;
  border-radius: 4px;
  background-color: #343434;
  box-shadow: none;
  border: 0;
  position: relative;
  width: 248px;
  opacity: 0.7;
  height: 40px;
  transition: opacity 350ms;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  opacity: 0.7;
  :focus-within {
    opacity: 1;
  }
  > input {
    background: transparent;
    outline: none;
    border: none;
    font-weight: 400;
    font-family: inherit;
    font-size: 15px;
    color: white;
  }
  > input::placeholder {
    opacity: 1;
    color: gray;
  }
  > img {
    object-fit: contain;
    height: 20px;
  }
`;

const HeaderActions = styled.div`
  width: 100%;
  margin-top: 10px;
  color: #999;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-end;
  > button {
    background: transparent;
    font-family: inherit;
    font-weight: 600;
    border: none;
    color: #999;
    font-size: 14px;
    cursor: pointer;
    transition: color 200ms;
    letter-spacing: 2px;
    :hover {
      color: #ccc;
    }
  }
  > span {
    color: #343434;
    font-size: 1.125em;
    font-weight: 500;
  }
`;
