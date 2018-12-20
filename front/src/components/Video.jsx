import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './Video.scss';

class Video extends Component {

  render() { 
    return ( 
    <Container fluid className="Video">
    <video 
      src="/medias/video_apo.mp4"
      autoPlay
      loop
      muted
    />
  </Container> );
  }
}
 
export default Video;