import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../css/MovieList.css'

class MovieItem extends Component {
  constructor (props){
    super(props);
    this.state = {
      movies: []
    };
    this.setRatingClass = this.setRatingClass.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({movies: props.movies})
  }
  
  setRatingClass(averageRating){
    var ratingColour = ""
    if (averageRating >= 75) {
      ratingColour = "RatingGood";
    } else if (averageRating >= 50 && averageRating < 75){
      ratingColour = "RatingModerate";
    } else {
      ratingColour = "RatingBad"
    }
    return ratingColour;
  }
  
  render() {
    return(
      <div className="MovieItem" key={ this.props.id }>
        <div className={ `Rating ${this.setRatingClass(this.props.average)}` }>
          <span>{ this.props.average }%</span>
        </div>
        <Link to={ this.props.link }><img className="MainImage" src={ this.props.image } alt=""></img></Link>
        <p className="MovieTitle">{ this.props.title } </p>
        <p className="MovieDate mt-2 mb-4">{ this.props.date }</p>
      </div>
    )
  }
}

export default MovieItem;
