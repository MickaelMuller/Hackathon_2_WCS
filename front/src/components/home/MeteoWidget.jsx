import React, { Component } from 'react';
import { Container } from 'reactstrap';
import "./MeteoWidget.scss";

class MeteoWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
    <Container className="MeteoWidget">
      <div className="widget">
        <div className="widget__left-col">
          <div className="widget__temperature">57</div>
          <div className="widget__city">Bordeaux <br/>(OURAGAN)</div>
        </div>
        <div className="widget__right-col">
          <div className="widget__weather-icon">
            <i className="fa fa-bolt"></i>
          </div>
          <div className="widget__attrs">
            <div className="widget__attr">
              <div className="widget__attr-value">9765</div>
              <div className="widget__attr-unit">mm</div>
            </div>
            <div className="widget__attr">
              <div className="widget__attr-value">666</div>
              <div className="widget__attr-unit">km/h</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
    );
  }
}

export default MeteoWidget;