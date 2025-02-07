import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './navbar.css';

function NavbarComponent() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow-sm">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="/img/Logo-RP-claro.png"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Red Package Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={() => scrollToSection('quienes-somos')}>
                            Quiénes Somos
                        </Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('servicios')}>
                            Servicios
                        </Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('webapp')}>
                            WebApp
                        </Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('localizacion')}>
                            Contacto
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent; 