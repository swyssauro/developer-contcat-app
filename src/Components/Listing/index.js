import React from 'react';
import Lista from '../Lista';
import { List, Svg } from './styles';
import { Container } from 'react-bootstrap';

export default function header() {
  return (
    <List>
      <Container fluid className="cons-lis ">
        <Svg src="https://svgur.com/i/FA6.svg" alt="" />
        <Lista />
      </Container>
    </List>
  );
}
