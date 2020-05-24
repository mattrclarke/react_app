import React, { Component } from 'react';
import Back from './Back';
import '../css/Backdrop.css'

class Backdrop extends Component {

  render() {
    return(
      <div className="Backdrop">
        <Back history={ this.props.history } />
        <img className="BackdropImage" src={ this.props.backdrop }></img>
      </div>
    )
  }
}

export default Backdrop;