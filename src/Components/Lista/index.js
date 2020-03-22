import React from 'react';
import { Listing, Tittles, Descript } from './styles';
import { Container, Row } from 'react-bootstrap';

import { i18n } from '../Translate/i18n'

export default function Lista() {
  return (
    <Listing>
      <Container fluid className="cont-blak">
        <Tittles>{i18n.t('messages.app')}</Tittles>
        <Descript>{i18n.t('messages.sub')}</Descript>
        <Row>
          <h1>Olá</h1>
        </Row>
      </Container>
    </Listing>
  );
}
