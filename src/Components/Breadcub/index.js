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
          <Col xs lg="5"> <img className="pale-icons" src="https://i.ibb.co/1s5p7rF/pale-logged-out.png" alt="reactimg" /> </Col>
        </Row>
      </Container>
    </Breadcub>
  );
}
