import React from 'react';
import { Header } from './styles';
import { Container, Navbar, Nav, Badge, Form } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';

const badg = <Badge variant="secondary">New</Badge>
const I18N_STORAGE_KEY = 'i18nextLng'

export default function header() {
  const handleSelectChange = event => {
    localStorage.setItem(
      I18N_STORAGE_KEY,
      event.target.value
    )
    window.location = window.location.href;
  }
  return (
    <Header>
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="text-brand" href="/"> Cont'cat </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="text-header " href="/">Home</Nav.Link>
              <Nav.Link className="text-header " href="/cats">Cats {badg} </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              
              <Form.Label className="linguas"> <Icon name='language' size="big" /> </Form.Label>
              <Form.Control as="select" onChange={handleSelectChange}>
                <option></option>
                <option value="pt-BR">PT-BR</option>
                <option value="en-US">EN-US</option>
                <option value="fr-FRA">FRA-FR</option>
              </Form.Control>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Header>
  );
}
