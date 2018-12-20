import React from 'react';
import {Container, Row} from 'reactstrap';
import './Navbar.scss';

const Navbar = () => {
    return ( 
        <Container fluid className='navbar'>
            <img src='/images/navbar.png' alt='NewYork Times Header'/>
            <Row className='red'>
                <h3>FLASH INFO</h3>
            </Row>
        </Container>
     );
}
 
export default Navbar;