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
      <Container fluid className="MeteoGreen">
        <Row>
          <Col lg='2'>
            <img className='image-meteo' src='/images/MeteoGreen.png' alt='carte temperatures et meteo' />
          </Col>
          <Col className="defileParent">
            <p  className="defile" data-text="METEO [LIVE] :
              La température à la surface du globe a commencé à diminuer  !">
              METEO [LIVE] :
              La température à la surface du globe a commencé à diminuer !
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MeteoGreen;