import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Header from "./Header"
import MovieList from "./MovieList"

class Movies extends Component {
  constructor (props){
  super(props);
  this.state = {
    filtered: [],
      movies: [],
      title: "Popular Movies"
  };
    this.search = this.search.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.formatResults = this.formatResults.bind(this);
  }

  componentDidMount() {
    let apiKey = `6ed12e064b90ae1290fa326ce9e790ff`
    let url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&language=en-US`
    fetch(url)
    .then(res => {
      return res.json();
    })
    .then((data) => {
      this.setState({
        movies: data.results
      });
      this.formatResults(data.results)
    })
  }

  handleKeyDown(e) {
    let heading = document.querySelector(".CollectionHeading").firstElementChild;
    let query = e.target.value;
    this.search();
     if (query === "") {
       this.formatResults(this.state.movies)
       heading.innerText = "Popular Movies"
     }
   }

  search() {
    let heading = document.querySelector(".CollectionHeading").firstElementChild;
    let query = document.querySelector(".SearchInput").value;

    if (query !== "") {
      heading.innerText = `Results for ${ query }:`;
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=6ed12e064b90ae1290fa326ce9e790ff&language=en-US&&page=1&include_adult=false&query=${query}`)
      .then(res => {
        return res.json();
      })
      .then( (data) => {
        this.formatResults(data.results)
      });
    }
  }
  
  formatResults(results) {
    
    var movieElements = results.map((movieItem) => {
    var linkType = movieItem.media_type;
      
      return (
        {
          title: movieItem.original_title,
          date: movieItem.release_date,
          image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + movieItem.poster_path,
          average:  movieItem.vote_average * 10,
          link: `${linkType}/${movieItem.id}/`,
          mediaType: movieItem.media_type
        }
      );
    });
    this.setState({ filtered: movieElements })
  }
  
  render() {
    return(
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="Search col-md-8">
              <span>
                <FontAwesomeIcon
                  icon={ faSearch }
                  onClick={ this.search }/>
              </span>
              <input type="text"
                className="SearchInput"
                placeholder="Search"
                onKeyUp={ this.handleKeyDown } />
              </div>
            </div>
            <MovieList movies={ this.state.filtered } />
        </div>
      </div>
    )
  }
}

export default Movies;
