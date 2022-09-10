import React, { Component } from "react";
import USER_DATA from "../mock_names.json";

export default class SearchbarContainer extends Component {
  render() {
    return (
      <div>
        {USER_DATA.map((value, key) => {
          return <div>{value.first_name}</div>;
        })}
      </div>
    );
  }
}
