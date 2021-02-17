import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";

class Search extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount = () => {
    this.searchBreeds("pomeranian")
  }

  searchBreeds = breed => {
    API.getBreeds(breed).then(res => {
      this.setState({results: res.data.message})
    })
  }

  handleInputChange = event => {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.searchBreeds(this.state.search)
    this.setState({ search: "" })
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center">Search By Breed!</h2>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        {this.state.results.map(imgSrc=><img src={imgSrc}/>)}
      </div>
    );
  }
}

export default Search;
