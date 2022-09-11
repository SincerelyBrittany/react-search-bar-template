import React from "react";
import { useState } from "react";
export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(props, "this is props");
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={handleOnChange}
      />
    </>
  );
}
