import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label for="search">Breed Name:</label>
        <input
          className="form-control"
          id="search"
          name="search"
          placeholder="Type in a dog breed to begin"
          value={props.value}
          onChange={props.handleInputChange}>
        </input>
      </div>
      <button
        type="submit"
        className="btn btn-success"
        onClick={props.handleFormSubmit}>
        Search
          </button>
    </form>
  );
}

export default SearchForm;
