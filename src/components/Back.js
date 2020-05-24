import React, { Component } from 'react';
import '../css/Back.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

class Back extends Component {
  constructor (props){
    super(props);
    this.goBack = this.goBack.bind(this)
  }
  
  goBack(){
    this.props.history.push('/');
  }

  render() {
    return(
    <div className="BackArrow">
    <FontAwesomeIcon icon={faArrowLeft} onClick={ this.goBack }/>
    </div>
    )
  }
}
export default Back;
