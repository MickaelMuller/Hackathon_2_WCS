import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./MeteoGreen.scss";

class MeteoGreen extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Container fluid className="MeteoWidget">
        <Row>
          <Col lg='2'>
            <img className='image-meteo' src='/images/MeteoGreen.png' alt='carte temperatures et meteo' />
          </Col>
          <Col className="defileParent">
            <p  className="defile" data-text="METEO [LIVE] :
              Les scientifiques nous informent que les oiseaux sont de retour en ville !">
              METEO [LIVE] :
              Les scientifiques nous informent que les oiseaux sont de retour en ville !
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MeteoGreen;