import React from "react";

export default function SearchBar(type, placeholderText) {
  return (
    <>
      <input type={type} placeholder={placeholderText} />
    </>
  );
}
