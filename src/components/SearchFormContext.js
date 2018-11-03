import React from "react";
import SearchForm from "./SearchForm";
import { Consumer } from "../context";

const SearchFormContext = SearchForm => {
  return props => (
    <Consumer>
      {value => {
        return <SearchForm />;
      }}
    </Consumer>
  );
};
export default SearchFormContext;
