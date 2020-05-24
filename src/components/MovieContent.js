import React, { Component } from 'react';
import '../css/MovieContent.css'
class MovieContent extends Component {

  render() {
    return(
      <div className="Content">
        <div className="ItemDetails">
          <div className="ItemImage">
            <img className="ItemPoster" src={ this.props.poster } alt=""></img>
          </div>
          <div className="ItemInfo">
            <h1>{ this.props.title }</h1>
            <p>{ this.props.releaseDate } • { this.props.voteAverage } User Score</p>
            <p>{ this.props.movieLength }</p>
          </div>
        </div>
        <div>
          <div className="MovieDescription">
            <h2>Overview</h2>
            <p className="ItemDescription">
            { this.props.overview }
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieContent;