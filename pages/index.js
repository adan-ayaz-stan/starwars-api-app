import Head from "next/head";
import styled from "styled-components";
import { useState } from "react";
import Character from "../components/Character";

export default function Home({ data }) {
  const [menuItems, setMenuItems] = useState(12);

  const handlerShowMore = () => {
    setMenuItems(menuItems + 12);
  };

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <MyHeading>Star Wars</MyHeading>
      <HomeScreenContainer>
        <StarfieldLeft />
        <CharactersContainer>
          <ItemsListing>
            {data
              .filter((element) => element.id !== 28 && element.id !== 77)
              .map(
                (element, index) =>
                  index < menuItems && (
                    <Character
                      characterData={element}
                      characterIndexing={index + 1}
                      key={element.id}
                    />
                  )
              )}
          </ItemsListing>
        </CharactersContainer>
        {menuItems < data.length ? (
          <Button onClick={handlerShowMore}>
            <span>Show More</span>
            <div className="liquid"></div>
          </Button>
        ) : (
          <Button>
            <span>End of the Page</span>
            <div className="liquid"></div>
          </Button>
        )}
        <StarfieldRight />
      </HomeScreenContainer>
    </>
  );
}

const MyHeading = styled.h1`
  color: blue;
  font-size: 40px;
  font-family: Impact;
  font-weight: 100;
`;

const HomeScreenContainer = styled.div`
  font-family: "DINNextW01-Regular", -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Starfield = styled.div`
  position: fixed;
  background-repeat: repeat-y;
  top: 0;
  width: 200px;
`;

const StarfieldLeft = styled(Starfield)`
  left: 0;
  height: 1700px;
  background-position: left center;
  background-size: 100% auto;
  background-image: url("https://static-mh.content.disney.io/starwars/assets/background/bg_starsL-fd4661a3ccea.jpg");
`;
const StarfieldRight = styled(Starfield)`
  right: 0;
  height: 1700px;
  background-position: right center;
  background-size: 100% auto;
  background-image: url("https://static-mh.content.disney.io/starwars/assets/background/bg_starsR-655c85e404d4.jpg");
`;
const CharactersContainer = styled.div`
  display: flex;
  margin-top: 200px;
  margin: 0 190px;
  padding: 30px;
  color: white;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  background-color: #151515;
`;

const ItemsListing = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Button = styled.button`
  position: relative;
  margin: 2vw auto;
  padding: 19px 36px;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  border-radius: 4px;
  border: none;

  span {
    color: #fff;
    position: relative;
    font-family: Arial;
    letter-spacing: 8px;
    z-index: 1;
  }

  .liquid {
    position: absolute;
    top: -80px;
    left: 0;
    width: 100%;
    height: 200px;
    background: #636363;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }

  .liquid::after,
  .liquid::before {
    content: "";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
    background: #fff;
  }

  .liquid::before {
    border-radius: 45%;
    background: rgba(20, 20, 20, 1);
    animation: animate 5s linear infinite;
  }
  .liquid::after {
    border-radius: 40%;
    background: rgba(20, 20, 20, 0.5);
    animation: animate 10s linear infinite;
  }

  :hover .liquid {
    top: -120px;
  }

  :hover > span {
    color: #000;
  }

  @keyframes animate {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }
`;

export async function getStaticProps() {
  const res = await fetch(
    "https://akabab.github.io/starwars-api/api/all.json"
  ).catch((error) => {
    console.log("Data fetching failed!");
  });

  const data = await res.json();

  return {
    props: { data },
  };
}
