import React, { useState } from "react";
import USER_DATA from "../mock_names.json";
import SearchBar from "./Searchbar";

export default function SearchbarContainer() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <SearchBar placeholder="name" changeHandler={handleChange} />
      {USER_DATA.filter((value, key) => {
        if (searchTerm == "") {
          return value;
        } else if (
          value.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return value;
        }
      }).map((value, key) => {
        return <div key={key}>{value.first_name}</div>;
      })}
    </>
  );
}
