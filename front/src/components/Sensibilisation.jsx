import React, { Component } from 'react';
import './Sensibilisation.scss';
import FormTips from './FormTips';
import CardSensibilisation from './CardSensibilisation';
import cardSensibPerso from './cardSensibPerso.json';
import cardSensibPro from './cardSensibPro.json';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Sensibilistation extends Component {

  render() {
    return (
      <div className="Sensibilisation">
        <div className="header">
          <img src="/medias/theshiftproject.png" alt="theshiftproject" className="margin" />
          <p class="line-1 anim-typewriter">"C’est à condition d’accepter les limites de </p>
          <p class="line-1 anim2-typewriter2">ce monde qu’une politique salubre sera possible."</p>
          <p class="line-1 anim3-typewriter3 textsize">Matthieu Auzanneau (Directeur de The Shift Project)</p>
        </div>
        <Container>
          <div className="solutionsPerso">
          <h2 className="title-h2">Solutions des particuliers</h2>
          <Row>
            {cardSensibPerso.map(bnt => (
              <Col lg="4">
                <CardSensibilisation image={bnt.image} name={bnt.title} description={bnt.description} key={bnt.id} />
              </Col>
            ))}
          </Row>
          </div>
          <div className="solutionsPro">
          <h2 className="title-h22">Solutions des professionnels</h2>
          <Row>
            {cardSensibPro.map(bnt => (
              <Col lg="4">
                <CardSensibilisation image={bnt.image} name={bnt.title} description={bnt.description} key={bnt.id} />
              </Col>
            ))}
          </Row>
          </div>
          <br/>
          <FormTips />
          <Button color="success" onClick={this.toggle}><Link to='./happiness' style={{color: 'white'}}>les effets</Link></Button>
        </Container>
      </div>
    );
  }
}

export default Sensibilistation;