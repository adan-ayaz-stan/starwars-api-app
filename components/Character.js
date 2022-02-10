import React from "react";

export default function Character(props) {
  return (
    <>
      <div>
        {props.characterIndexing} :{props.characterData.name}
      </div>
    </>
  );
}
