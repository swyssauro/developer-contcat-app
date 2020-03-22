import React from 'react';
import { Breadcub } from './styles';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { i18n } from '../Translate/i18n'

export default function header() {
  return (
    <Breadcub>
      <Container>
        <Row>
          <Col xs lg="6">
            <Jumbotron fluid>
              <Container>
                <h1 className="text-jumb ">{i18n.t('cats.app')}</h1>
                <p>{i18n.t('cats.sub')}</p>
              </Container>
            </Jumbotron>
          </Col>
          <Col xs lg="5"> <img className="pale-icons" src="https://assets-ouch.icons8.com/preview/901/89886320-2e01-466b-8d36-f435391ec3e5.png" alt="reactimg" /> </Col>
        </Row>
      </Container>
    </Breadcub>
  );
}

