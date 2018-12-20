import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./MeteoWidget.scss";

class MeteoWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Container fluid className="MeteoWidget">
        <Row>
          <Col lg='2'>
            <img className='image-meteo' src='/images/meteo.png' alt='carte temperatures et meteo' />
          </Col>
          <Col className="defileParent">
            <p  className="defile" data-text="ALERTE METEO [LIVE] :
              Nos journalistes sur le terrain nous informent qu'une énorme tempête détruit tous les Etats-Unis !">
              ALERTE METEO [LIVE] :
              Nos journalistes sur le terrain nous informent qu'une énorme tempête détruit tous les Etats-Unis !
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MeteoWidget;