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
        </CharactersContainer>
        {menuItems < data.length ? (
          <Button onClick={handlerShowMore}>Show more</Button>
        ) : (
          <p>End of page!</p>
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

const HomeScreenContainer = styled.div``;

const Starfield = styled.div`
  position: fixed;
  background-repeat: repeat-y;
`;

const StarfieldLeft = styled(Starfield)``;
const StarfieldRight = styled(Starfield)``;
const CharactersContainer = styled.div`
  display: flex;
  margin-top: 200px;
  padding: 30px;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  background-color: #151515;
`;
const Button = styled.button``;

export async function getStaticProps() {
  const res = await fetch("https://akabab.github.io/starwars-api/api/all.json");
  const data = await res.json();

  return {
    props: { data },
  };
}
