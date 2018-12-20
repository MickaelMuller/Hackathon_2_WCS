import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './VideoHappiness.scss';

class VideoHapsiness extends Component {

  render() { 
    return ( 
    <Container fluid className="Video">
    <video 
      src="/medias/video_happy.mp4"
      autoPlay
      loop
      muted
    />
  </Container> );
  }
}
 
export default VideoHapsiness;