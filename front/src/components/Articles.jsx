import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Articles.scss';

const Articles = () => {
    return (
        <Container className='Articles'>
            <Row className='row-border'>
                <Col lg='8'>
                    <Row>
                        <Col lg='6'>
                            <article className='article-body'>
                                <h3>Titre</h3>
                                <p>Cillum ea exercitation id officia ex occaecat dolore id non minim nisi pariatur ex. Qui proident id nisi eu. Cupidatat dolor magna eiusmod cillum Lorem excepteur culpa proident. Elit excepteur amet minim nisi officia irure ex non do ullamco. Minim reprehenderit dolore anim nisi occaecat ad id esse duis aliqua.

        Anim quis deserunt do aute Lorem. Irure sint enim voluptate ex incididunt fugiat velit cillum dolor est magna sunt. Cupidatat id elit occaecat occaecat veniam id officia et ad dolore officia. Elit eiusmod veniam anim ipsum ad proident culpa id aute magna amet eiusmod. Laborum excepteur est enim deserunt. Incididunt id adipisicing cillum dolor est sunt nisi cillum dolor culpa. Magna do ipsum est irure tempor nulla occaecat excepteur.

Proident nostrud cillum magna aliqua reprehenderit anim id commodo ullamco nulla. Proident aute anim magna Lorem. Occaecat voluptate quis deserunt velit irure cupidatat in occaecat cupidatat.</p>
                            </article>
                        </Col>
                        <Col lg='6' className='image-article'>
                            <img src='/images/catastrophe1.jpg' alt='catastrophe' />
                            <p className='legend'>Cillum ea exercitation id officia ex occaecat dolore id non minim nisi pariatur ex. Qui proident id nisi eu.</p>
                        </Col>
                    </Row>
                </Col>
                <Col lg='4' className="article-border">
                    <Row className='row-border'>
                        <Col lg='6'>
                            <article>
                                <h3>Titre</h3>
                                <p>Cillum ea exercitation id officia ex occaecat dolore id non minim nisi pariatur ex. Qui proident id nisi eu. Cupidatat dolor magna eiusmod cillum Lorem excepteur culpa proident.
                     </p>
                            </article>
                        </Col>
                        <Col lg='6' className='image-article'>
                            <img src='/images/deforestation.jpeg' alt='catastrophe' />
                            <p className='legend'>Cillum ea exercitation id officia ex occaecat dolore id non minim nisi pariatur ex. Qui proident id nisi eu.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='6'>
                            <article>
                                <h3>Titre</h3>
                                <p>Cillum ea exercitation id officia ex occaecat dolore id non minim nisi pariatur ex. Qui proident id nisi eu. Cupidatat dolor magna eiusmod cillum Lorem excepteur culpa proident.
                     </p>
                            </article>
                        </Col>
                        <Col lg='6' className='image-article'>
                            <img src='/images/desert.jpg' alt='catastrophe' />
                            <p className='legend'>Cillum ea exercitation id officia ex occaecat dolore id non minim nisi pariatur ex. Qui proident id nisi eu.</p>
                        </Col>
                    </Row>
                </Col>
                <hr />
            </Row>
            <Row>
                <Col>
                <img src='/images/continent.jpg' alt='catastrophe' className='image-article-bottom'/>
                <article className='article-body'>
                
                            <p className='legend'>Cillum ea exercitation id officia ex occaecat dolore id non minim nisi pariatur ex. Qui proident id nisi eu.</p>
                                <h3>Titre</h3>
                                <p>Cillum ea exercitation id officia ex occaecat dolore id non minim nisi pariatur ex. Qui proident id nisi eu. Cupidatat dolor magna eiusmod cillum Lorem excepteur culpa proident. Elit excepteur amet minim nisi officia irure ex non do ullamco. Minim reprehenderit dolore anim nisi occaecat ad id esse duis aliqua.

        Anim quis deserunt do aute Lorem. Irure sint enim voluptate ex incididunt fugiat velit cillum dolor est magna sunt. Cupidatat id elit occaecat occaecat veniam id officia et ad dolore officia. Elit eiusmod veniam anim ipsum ad proident culpa id aute magna amet eiusmod. Laborum excepteur est enim deserunt. Incididunt id adipisicing cillum dolor est sunt nisi cillum dolor culpa. Magna do ipsum est irure tempor nulla occaecat excepteur.

Proident nostrud cillum magna aliqua reprehenderit anim id commodo ullamco nulla. Proident aute anim magna Lorem. Occaecat voluptate quis deserunt velit irure cupidatat in occaecat cupidatat.</p>
                            </article>
                </Col>
            </Row>
        </Container>

    );
}

export default Articles;