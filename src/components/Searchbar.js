import React from "react";
export default function SearchBar(props) {
  return (
    <>
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={props.changeHandler}
      />
    </>
  );
}
