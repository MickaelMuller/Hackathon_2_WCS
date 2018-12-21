import React, { Component } from 'react';
import './Sensibilisation.scss';
import FormTips from './FormTips';
import CardSensibilisation from './CardSensibilisation';
import cardSensibPerso from './cardSensibPerso.json';
import cardSensibPro from './cardSensibPro.json';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Sensibilistation extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {


    return (
      <div className="Sensibilisation">
        <div className="header">
          <a target="_blank" href="https://theshiftproject.org/" title="The Shift Project">
            <img src="/medias/theshiftproject.png" alt="theshiftproject" className="margin" />
          </a>
          <p class="line-1 anim-typewriter">"C’est à condition d’accepter les limites de </p>
          <p class="line-1 anim2-typewriter2">ce monde qu’une politique salubre sera possible."</p>
          <p class="line-1 anim3-typewriter3 textsize">Matthieu Auzanneau (Directeur de The Shift Project)</p>
        </div>
        <Container className="btnarrowright">
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
          <br />
          <FormTips />
        </Container>
        <p className="text-left">Retour au scénario <br />catastrophe(2025)</p>
        <p className="text-right">Aller au scénario<br />sobriété (2025)</p>
        <Button className="joel-left" color="success"><Link style={{ color: "white" }} to="/"><i className=" fa fa-arrow-circle-o-left fa-3x"></i></Link></Button>
        <Button className="joel" color="danger"><Link style={{ color: "white" }} to="/happiness"><i className=" fa fa-arrow-circle-o-right fa-3x"></i></Link></Button>
      </div>
    );
  }
}

export default Sensibilistation;