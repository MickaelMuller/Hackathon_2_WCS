import React, { Component } from 'react';
import "./FormTips.scss"
import { Breadcrumb, BreadcrumbItem, Container } from 'reactstrap';
import FormSubmit from './FormSubmit';
import Moment from 'react-moment';
import "moment-timezone";


class FormTips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: [],
    }
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/")
      .then(results => results.json())
      .then((tips) => {
        this.setState({ tips });
      });
  }


  render() {
    const { tips } = this.state;
    return (
      <Container className="FormTips">
        {
          tips.map(item => (
            <Breadcrumb>
              <Moment locale="fr" format="DD/MM/YYYY">{item.date}</Moment>
              <BreadcrumbItem active><br/>{item.name} : <cite>« {item.message} »
</cite></BreadcrumbItem>
            </Breadcrumb>
          ))
        }
          <br />
          <hr />
          <br />
        <FormSubmit />
      </Container>
    );
  }
}

export default FormTips;