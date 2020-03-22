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
                <h1 className="text-jumb ">{i18n.t('tittle.app')}</h1>
                <p>{i18n.t('tittle.sub')}</p>
              </Container>
            </Jumbotron>
          </Col>
          <Col xs lg="5"> <img className="pale-icons" src="https://assets-ouch.icons8.com/preview/63/52fd313b-39aa-4889-aa7d-94689900345f.png" alt="reactimg" /> </Col>
        </Row>
      </Container>
    </Breadcub>
  );
}
