import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col lg={4} md={6} className="mb-4 mb-lg-0">
                        <div className="footer-brand">
                            <img 
                                src="/img/Logo-RP-claro.png" 
                                alt="Red Package Logo" 
                                height="50"
                                className="footer-logo"
                            />
                            <p className="mt-3 footer-description">
                                Conectamos tus sueños entre USA y Colombia con envíos seguros y confiables.
                            </p>
                        </div>
                    </Col>
                    
                    <Col lg={4} md={6} className="mb-4 mb-lg-0">
                        <h5 className="footer-title">Enlaces Rápidos</h5>
                        <ul className="footer-links">
                            <li>
                                <a href="#quienes-somos">
                                    <i className="fas fa-angle-right"></i> Quiénes Somos
                                </a>
                            </li>
                            <li>
                                <a href="#servicios">
                                    <i className="fas fa-angle-right"></i> Servicios
                                </a>
                            </li>
                            <li>
                                <a href="#webapp">
                                    <i className="fas fa-angle-right"></i> WebApp
                                </a>
                            </li>
                            <li>
                                <a href="#localizacion">
                                    <i className="fas fa-angle-right"></i> Contacto
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col lg={4} md={12}>
                        <h5 className="footer-title">Síguenos</h5>
                        <div className="footer-social">
                            <a 
                                href="https://www.facebook.com/RedPackage4.0/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-icon facebook"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a 
                                href="https://www.instagram.com/redpackage/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-icon instagram"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a 
                                href="https://www.linkedin.com/company/redpackagesas/?viewAsMember=true" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-icon linkedin"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a 
                                href="https://wa.me/573012201583" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-icon whatsapp"
                            >
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                        <div className="footer-contact mt-3">
                            <p>
                                <i className="fas fa-envelope me-2"></i>
                                redpackage@outlook.com
                            </p>
                            <p>
                                <i className="fas fa-envelope me-2"></i>
                                redpackagesas@gmail.com
                            </p>
                            <p>
                                <i className="fas fa-phone me-2"></i>
                                +57 301 220 1583
                            </p>
                        </div>
                    </Col>
                </Row>

                <hr className="footer-divider" />

                <div className="footer-bottom text-center">
                    <p className="mb-0">
                        © {new Date().getFullYear()} Red Package S.A.S. Todos los derechos reservados.
                    </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;