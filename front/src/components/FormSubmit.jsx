import React, { Component } from 'react';
import "./FormSubmit.scss";
import { Container, Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';

class FormSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      message: '',
    };
    this.newTips = this.newTips.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  newTips(e) {
    e.preventDefault();
    fetch("http://localhost:4000/api/", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(() => {
        window.location.reload();
      });

  }

  changeInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    const { name, date, message } = this.state;
    return (
      <Container>
        <Form onSubmit={this.newTips} className="form-tips">
          <FormGroup row>
            <Label sm={2}>Nom</Label>
            <Col sm={10}>
              <Input type="text" name="name" placeholder="Votre nom" value={name} onChange={this.changeInput}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Date</Label>
            <Col sm={10}>
              <Input type="date" name="date" value={date} onChange={this.changeInput} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Message</Label>
            <Col sm={10}>
              <Input type="textarea" name="message" placeholder="Votre tips" value={message} onChange={this.changeInput} />
            </Col>
          </FormGroup>
          <Button className="btn-tips btn-submit" color="info" >Soumettre</Button>
        </Form>
      </Container>
    );
  }
}

export default FormSubmit;