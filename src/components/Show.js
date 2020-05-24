import React, { Component } from 'react';
import Backdrop from './Backdrop';
import MovieContent from './MovieContent';
import '../css/Show.css'

class Show extends Component {
  constructor (props){
  super(props);
  this.state = {
    movie: ''
  };
}

componentDidMount() {

  let id = this.props.match.params.id;
  var mediaType = undefined;
  if(window.location.href.includes("movie")){
    mediaType = "movie"
  } else {
    mediaType = "tv"
  }
  
  fetch(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=6ed12e064b90ae1290fa326ce9e790ff&language=en-US`)
    .then(response => {      
      return response.json();
    })
    .then( (data) => {
        let url = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
        let poster = url + data.poster_path;
        let backdrop = "https://image.tmdb.org/t/p/w780/" + data.backdrop_path;

        function movieLength(runtime)
          {
            const hours = Math.floor(runtime / 60);
            const minutes = runtime % 60;
            return `${hours}h ${minutes}min`;
          }

        let release_date = "Unknown";
        
        if (data.release_date !== undefined){
          release_date = data.release_date.split("-")[0]
        }
        
        let element = (
          <div className="ShowMovie">
            <Backdrop history={this.props.history}
                      backdrop={backdrop}/>
                    
            <MovieContent poster={poster}
                     title={data.original_title}
                     releaseDate={release_date}
                     voteAverage={data.vote_average * 10}
                     movieLength={movieLength(data.runtime)}
                     overview={data.overview}
            />
          </div>
        )
      this.setState({ movie: element })
      })
    }

  render() {
    return(
      <div>
        {this.state.movie}
      </div>
    )
  }
}

export default Show;
