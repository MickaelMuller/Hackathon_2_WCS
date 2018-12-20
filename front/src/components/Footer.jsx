import React from 'react';
import { Container, Row } from 'reactstrap';
import './Footer.scss';

const Footer = () => {
    return (
        <Container>
            <hr/>
            <Row className='footer'>
                <p>© 2018 Le monde </p>
                <p>Nous contacter</p>
                <p>Plan du site</p>
                <p>Aide</p>
                <p>Souscription </p>
                <p>Publicité</p>
                <p>Recrutement</p>
                <p>Conditions de vente</p>             
            </Row>
        </Container>
    );
}

export default Footer;