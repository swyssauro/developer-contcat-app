import React from 'react';
import { Listing, Tittles, Descript } from './styles';
import { Container, Row, Col } from 'react-bootstrap';

import { i18n } from '../Translate/i18n'

export default function Lista() {
  return (
    <Listing>
      <Container fluid className="cont-blak">
        <Tittles>{i18n.t('messages.app')}</Tittles>
        <Descript>{i18n.t('messages.sub')}</Descript>
        <Row>
          <Col sm="6"> <Tittles>Olá</Tittles> </Col>
        </Row>
      </Container>
    </Listing>
  );
}
