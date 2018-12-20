import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import './CardSensibilisation.scss';

class CardSensibilisation extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="CardSensibilisation">
          <Card inverse className="card-sensib">
            <CardImg width="110%" src={this.props.image} alt="Card image cap" className="card-image"/>
            <CardImgOverlay>
              <CardTitle className="card-title">{this.props.name}</CardTitle>
              <CardText className="card-text">{this.props.description}</CardText>
            </CardImgOverlay>
          </Card>
      </div>
    );
  };
}

export default CardSensibilisation;
