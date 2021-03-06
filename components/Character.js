import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Character(props) {
  return (
    <>
      {/* <div>
        {props.characterIndexing} :{props.characterData.name}
      </div> */}
      <Link href={`/id/${props.characterData.id}.json`}>
        <Li>
          <Card>
            <CardImage src={props.characterData.image}></CardImage>
            <CardContent>
              <CardTitle>{props.characterData.name}</CardTitle>
              <CardText>
                <HorizontalRule />
              </CardText>
              <CardButton>Button</CardButton>
            </CardContent>
          </Card>
        </Li>
      </Link>
    </>
  );
}

const Li = styled.li`
  display: flex;
  flex-flow: column;
  padding: 1rem;
  width: 1vw;
  transition: ease 0.4s;
  &:hover {
    transform: scale(1.05);
  }
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: fit-content;
  }
  @media (max-width: 700px) {
    width: 90vw;
  }
`;
const Card = styled.div`
  width: 20vw;
  background-color: darkgray;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover > .card__image {
    filter: contrast(100%);
  }
  @media (max-width: 700px) {
    width: 70vw;
  }
`;
const CardImage = styled.img`
  height: 50vh;
  background-position: center center;
  background-repeat: no-repeat;
  /* background-size: contain; */
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  object-fit: cover;
  filter: contrast(70%);
  //filter: saturate(180%);
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  &::before {
    content: "";
    display: block;
    padding-top: 56.25%; // 16:9 aspect ratio
  }
  @media (min-width: 40rem) {
    &::before {
      padding-top: 66.6%; // 3:2 aspect ratio
    }
  }
`;

const CardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
`;
const CardTitle = styled.div`
  color: #696969;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const CardText = styled.p`
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
`;
const CardButton = styled.button`
  display: block;
  width: 100%;
  background-color: black;
  border: 1px solid #cccccc;
  border-radius: 1rem;
  color: #696969;
  padding: 0.5rem;
`;

const HorizontalRule = styled.hr`
  height: 1px;
  background-color: #666666;
  border: none;
`;

/*

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.btn {
  background-color: white;
  border: 1px solid @gray-light;
  //border-radius: 1rem;
  color: @gray-dark;
  padding: 0.5rem;
  text-transform: lowercase;
}

.btn--block {
  display: block;
  width: 100%;
}

.cards__item {
  display: flex;
  padding: 1rem;
  @media(min-width: 40rem) {
    width: 50%;
  }
  @media(min-width: 56rem) {
    width: 33.3333%;
  }
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    .card__image {
      filter: contrast(100%);
    }
  }
}

.card__content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
}

.card__image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: contrast(70%);
  //filter: saturate(180%);
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(.43,.41,.22,.91);;
  &::before {
    content: "";
	  display: block;
    padding-top: 56.25%; // 16:9 aspect ratio
  }
  @media(min-width: 40rem) {
    &::before {
      padding-top: 66.6%; // 3:2 aspect ratio
    }
  }

  .card__title {
  color: @gray-dark;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.card__text {
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
}
}
 */
