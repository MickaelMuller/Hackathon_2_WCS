import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

class CardSensibilisation extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
          <Card inverse>
            <CardImg width="110%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1txhKdIR9zcqgMBs4Py9hqZXsBY0kHmNWHZi5wdguKVmfIYSMA" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>{this.props.name}</CardTitle>
              <CardText>{this.props.description}</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
          </Card>
      </div>
    );
  };
}

export default CardSensibilisation;
