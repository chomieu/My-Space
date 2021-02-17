import React from "react";

function SearchForm(props) {
  return (
    <form className="d-flex justify-content-center bg-light p-3">
      <input
        className="form-control w-50"
        id="search"
        name="search"
        placeholder="Search Employee"
        value={props.value}
        onChange={props.handleInputChange}>
      </input>
    </form>
  );
}

export default SearchForm;
