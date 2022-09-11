// import React, { Component } from "react";
import USER_DATA from "../mock_names.json";
import SearchBar from "./Searchbar";

// export default class SearchbarContainer extends Component {
//   render() {
//     return (
//       <div>
//         {USER_DATA.map((value, key) => {
//           return <div>{value.first_name}</div>;
//         })}
//       </div>
//     );
//   }
// }

import React from "react";
import { useState } from "react";

export default function SearchbarContainer() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <SearchBar placeholder="name" onChange={(event) => event} />
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
