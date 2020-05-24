import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/MovieList.css';
import MovieItem from "./MovieItem";

class MovieList extends Component {
  constructor (props){
    super(props);
    this.state = {
      movies: []
    };
    this.formatDate = this.formatDate.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({movies: props.movies})
  }
    
  formatDate(releasedOn){
    if (releasedOn !== undefined){
      var releasedOn = releasedOn.split("-")
      var releaseDate = new Date(releasedOn[0], releasedOn[1])
      var month = releaseDate.toLocaleString('default', { month: 'long' });
      var date = releasedOn[0] + " " + month
    } else {
      date = "TBA"
    }
    return date
  }

  render() {
    return(
      <>
        <div className="col-md-8 mt-0 CollectionHeading">
          <h2 className="">Popular Movies</h2>
        </div>
        <div className="row">
          {this.state.movies.map(item => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 mb-4">
              <MovieItem key={ item.id }
                         average={ item.average }
                         link={ item.link }
                         image={ item.image }
                         title={ item.title }
                         date={ this.formatDate(item.date) }
                         />
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default MovieList;
