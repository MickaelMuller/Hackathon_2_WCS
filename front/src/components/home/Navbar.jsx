import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import './Navbar.scss';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }

  render() {
    return (
      <Container fluid className='Navbar'>
        <img src="/images/navbar.png" alt="imagenavbar" className="nyt-navbar" onClick={this.toggle} />
        <Row className='red'>
          <h3>FLASH INFO</h3>
        </Row>
      </Container>
    );
  }
}

export default Navbar;
