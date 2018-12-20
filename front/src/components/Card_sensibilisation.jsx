import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Container, Row, Col } from 'reactstrap';

class Card_sensibilisation extends Component {

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Card inverse>
                <CardImg width="110%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1txhKdIR9zcqgMBs4Py9hqZXsBY0kHmNWHZi5wdguKVmfIYSMA" alt="Card image cap" />
                <CardImgOverlay>
                  <CardTitle>Solution 1</CardTitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <CardText>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col>
              <Card inverse>
                <CardImg width="100%" src="http://www.dinan-agglomeration.fr/var/ayaline/storage/images/media/images/1.-dinan-agglo/randonnee-familiale-a-velo-sur-le-territoire/110663-1-fre-FR/Randonnee-familiale-a-velo-sur-le-territoire_media_home.jpg" alt="Card image cap" />
                <CardImgOverlay>
                  <CardTitle>Solution 2</CardTitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <CardText>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col>
              <Card inverse>
                <CardImg width="100%" src="https://calhoununderground.files.wordpress.com/2007/11/barnyard-daybreak.jpg" alt="Card image cap" />
                <CardImgOverlay>
                  <CardTitle>Solution 3</CardTitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <CardText>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
}

export default Card_sensibilisation;