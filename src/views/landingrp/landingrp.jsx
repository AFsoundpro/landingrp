import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./landingrp.css";
import Footer from '../../components/footer/footer';
import NavbarComponent from '../../components/navbar/navbar';

function Landingrp() {
    return (
        <div className="landing-container">
            <NavbarComponent />

            {/* Hero Section */}
            <section className="hero">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={10} className="text-center text-white position-relative">
                            {/* Bandera USA */}
                            <div className="flag-usa">
                                <img 
                                    src="/img/usa1.png" 
                                    alt="USA Flag" 
                                    className="flag-image"
                                />
                            </div>
                            {/* Bandera Colombia */}
                            <div className="flag-col">
                                <img 
                                    src="/img/colombia1.jpg" 
                                    alt="Colombia Flag" 
                                    className="flag-image"
                                />
                            </div>

                            <h1 className="display-3 fw-bold mb-4">
                                COMPRA EN ESTADOS UNIDOS, 
                                <span className="d-block mt-2">RECIBE EN TU DOMICILIO EN COLOMBIA</span>
                            </h1>
                            <p className="lead fs-4 mb-5">
                                Facilitamos tus compras internacionales con envíos seguros y rápidos. 
                                Sin complicaciones, sin intermediarios.
                            </p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <Button 
                                    as="a"
                                    href="https://www.redpackage.app"
                                    variant="danger" 
                                    size="lg"
                                    className="px-5 py-3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-box-open me-2"></i>
                                    Crear Casillero Gratis
                                </Button>
                            </div>

                            <Row className="mt-5 g-4 justify-content-center">
                                <Col md={4} sm={6}>
                                    <div className="hero-feature">
                                        <i className="fas fa-shipping-fast fa-2x mb-3"></i>
                                        <h5>Envío Express</h5>
                                        <p className="mb-0">3-5 días hábiles</p>
                                    </div>
                                </Col>
                                <Col md={4} sm={6}>
                                    <div className="hero-feature">
                                        <i className="fas fa-shield-alt fa-2x mb-3"></i>
                                        <h5>100% Seguro</h5>
                                        <p className="mb-0">Envíos asegurados</p>
                                    </div>
                                </Col>
                                <Col md={4} sm={6}>
                                    <div className="hero-feature">
                                        <i className="fas fa-dollar-sign fa-2x mb-3"></i>
                                        <h5>Mejor Precio</h5>
                                        <p className="mb-0">Tarifas competitivas</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Quienes Somos */}
            <section id="quienes-somos" className="content who">
                <Container>
                    <h2 className="title text-center mb-5">
                        Sobre Nosotros
                        <span className="d-block fs-5 fw-light mt-2 text-danger">Tu puente confiable entre USA y Colombia</span>
                    </h2>
                    <Row className="justify-content-center mb-5 align-items-stretch g-4">
                        <Col lg={6}>
                            <div className="mission-statement p-4 h-100">
                                <h3 className="display-6 fw-bold mb-4">Nuestra Misión</h3>
                                <p className="lead fw-bold mb-0">
                                    Conectamos sueños y acortamos distancias, haciendo que tus compras 
                                    en Estados Unidos lleguen de manera segura hasta la puerta de tu casa en Colombia.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="about-content p-4 h-100">
                                <h3 className="display-6 fw-bold mb-4">¿Quiénes Somos?</h3>
                                <p className="fs-5 fw-semibold text-dark mb-4">
                                    En <span className="text-danger">Red Package S.A.S</span>, nos especializamos en hacer que las distancias 
                                    entre Estados Unidos y Colombia se sientan más cortas que nunca.
                                </p>
                                <p className="fs-5 mb-0">
                                    Como líderes en la industria logística, ofrecemos una 
                                    <span className="fw-bold"> solución integral y personalizada </span> 
                                    para tus necesidades de compra y envío internacional.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 g-4 features-container">
                        <Col md={4}>
                            <div className="feature-box text-center p-4 bg-white">
                                <div className="feature-icon mb-3">
                                    <i className="fas fa-shipping-fast fa-3x text-danger"></i>
                                </div>
                                <h3 className="h4 fw-bold mb-3">Envío Express</h3>
                                <p className="mb-0">Entrega eficiente y segura de tus paquetes en tiempo récord</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="feature-box text-center p-4 bg-white">
                                <div className="feature-icon mb-3">
                                    <i className="fas fa-shield-alt fa-3x text-danger"></i>
                                </div>
                                <h3 className="h4 fw-bold mb-3">100% Seguro</h3>
                                <p className="mb-0">Garantizamos la protección total de tus compras de inicio a fin</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="feature-box text-center p-4 bg-white">
                                <div className="feature-icon mb-3">
                                    <i className="fas fa-headset fa-3x text-danger"></i>
                                </div>
                                <h3 className="h4 fw-bold mb-3">Soporte 24/7</h3>
                                <p className="mb-0">Equipo dedicado para asistirte en cualquier momento</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Servicios */}
            <section id="servicios" className="content servicios">
                <Container>
                    <h2 className="title text-center mb-5">
                        Nuestros Servicios
                        <span className="d-block fs-5 fw-light mt-2 text-danger">Soluciones integrales para tus envíos</span>
                    </h2>
                    <Row className="g-4">
                        <Col xl={3} lg={3} md={6} sm={6}>
                            <div className="service-card h-100">
                                <div className="service-icon">
                                    <i className="fas fa-box-open"></i>
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">Casilleros Virtuales</h3>
                                    <p className="service-description">
                                        Tu dirección personal en USA para recibir todas tus compras
                                    </p>
                                    <ul className="service-features">
                                        <li><i className="fas fa-check-circle"></i> Dirección permanente</li>
                                        <li><i className="fas fa-check-circle"></i> Sin costo mensual</li>
                                        <li><i className="fas fa-check-circle"></i> Consolidación gratis</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={6} sm={6}>
                            <div className="service-card h-100">
                                <div className="service-icon">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">Compra Asistida</h3>
                                    <p className="service-description">
                                        Te ayudamos con tus compras en cualquier tienda de USA
                                    </p>
                                    <ul className="service-features">
                                        <li><i className="fas fa-check-circle"></i> Asesoría personalizada</li>
                                        <li><i className="fas fa-check-circle"></i> Proceso seguro</li>
                                        <li><i className="fas fa-check-circle"></i> Múltiples tiendas</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={6} sm={6}>
                            <div className="service-card h-100">
                                <div className="service-icon">
                                    <i className="fas fa-map-marked-alt"></i>
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">Seguimiento Real</h3>
                                    <p className="service-description">
                                        Monitorea tus paquetes en tiempo real
                                    </p>
                                    <ul className="service-features">
                                        <li><i className="fas fa-check-circle"></i> Tracking actualizado</li>
                                        <li><i className="fas fa-check-circle"></i> Notificaciones</li>
                                        <li><i className="fas fa-check-circle"></i> Fotos del paquete</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={6} sm={6}>
                            <div className="service-card h-100">
                                <div className="service-icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">Atención 24/7</h3>
                                    <p className="service-description">
                                        Soporte dedicado para todas tus consultas
                                    </p>
                                    <ul className="service-features">
                                        <li><i className="fas fa-check-circle"></i> Chat en vivo</li>
                                        <li><i className="fas fa-check-circle"></i> Soporte WhatsApp</li>
                                        <li><i className="fas fa-check-circle"></i> Respuesta inmediata</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-5">
                        <Col md={8} className="text-center">
                            <div className="cta-box p-4">
                                <h4 className="fw-bold mb-3">¿Listo para empezar a comprar en USA?</h4>
                                <p className="lead mb-4">
                                    Únete a los miles de colombianos que ya confían en nosotros
                                </p>
                                <Button 
                                    variant="danger" 
                                    size="lg"
                                    href="https://www.redpackage.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5"
                                >
                                    <i className="fas fa-box-open me-2"></i>
                                    Crear Mi Casillero
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* WebApp Features */}
            <section id="webapp" className="content tarifas">
                <Container>
                    <h2 className="title text-white text-center mb-4">
                        Tu Compra, Tu Control
                        <span className="d-block fs-5 fw-light mt-2">Descubre todas las ventajas de nuestra app</span>
                    </h2>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="app-features-container">
                                <div className="app-feature-card mb-3">
                                    <div className="app-feature-icon">
                                        <i className="fas fa-calculator"></i>
                                    </div>
                                    <div className="app-feature-content">
                                        <h3>Cotización en Tiempo Real</h3>
                                        <ul className="app-feature-list">
                                            <li><i className="fas fa-check-circle"></i> Tarifas actualizadas</li>
                                            <li><i className="fas fa-check-circle"></i> Múltiples servicios</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="app-feature-card mb-3">
                                    <div className="app-feature-icon">
                                        <i className="fas fa-shopping-cart"></i>
                                    </div>
                                    <div className="app-feature-content">
                                        <h3>Compra Asistida</h3>
                                        <ul className="app-feature-list">
                                            <li><i className="fas fa-check-circle"></i> Asesoría personalizada</li>
                                            <li><i className="fas fa-check-circle"></i> Proceso seguro</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="app-feature-card">
                                    <div className="app-feature-icon">
                                        <i className="fas fa-credit-card"></i>
                                    </div>
                                    <div className="app-feature-content">
                                        <h3>Métodos de Pago Flexibles</h3>
                                        <ul className="app-feature-list">
                                            <li><i className="fas fa-check-circle"></i> Múltiples opciones</li>
                                            <li><i className="fas fa-check-circle"></i> Pagos seguros</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        
                        <Col lg={6} className="text-center">
                            <div className="app-screenshot">
                                <img 
                                    src="/img/screenshotrp.png" 
                                    alt="Red Package WebApp" 
                                    className="img-fluid"
                                />
                            </div>
                        </Col>
                    </Row>

                    <div className="text-center mt-4">
                        <Button 
                            variant="light" 
                            size="lg"
                            href="https://www.redpackage.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="download-btn"
                        >
                            <i className="fas fa-mobile-alt me-2"></i>
                            Acceder a la App
                        </Button>
                    </div>
                </Container>
            </section>

            {/* Contacto y Ubicación */}
            <section id="localizacion" className="content localizacion">
                <Container>
                    <h2 className="title text-center mb-5">
                        Contáctanos
                        <span className="d-block fs-5 fw-light mt-2 text-danger">Estamos aquí para ayudarte</span>
                    </h2>
                    <Row className="justify-content-center g-4">
                        <Col lg={4} md={6}>
                            <div className="contact-card">
                                <div className="contact-icon whatsapp">
                                    <i className="fab fa-whatsapp"></i>
                                </div>
                                <h4>WhatsApp</h4>
                                <p>Chatea con nosotros</p>
                                <a 
                                    href="https://wa.me/573012201583" 
                                    className="btn btn-success contact-btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-whatsapp me-2"></i>
                                    Iniciar Chat
                                </a>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="contact-card">
                                <div className="contact-icon email">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <h4>Email</h4>
                                <div className="email-list">
                                    <p>redpackage@outlook.com</p>
                                    <p>redpackagesas@gmail.com</p>
                                </div>
                                <a 
                                    href="mailto:redpackage@outlook.com" 
                                    className="btn btn-danger contact-btn"
                                >
                                    <i className="fas fa-envelope me-2"></i>
                                    Enviar Email
                                </a>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="contact-card">
                                <div className="contact-icon location">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <h4>Ubicación</h4>
                                <p>Colombia</p>
                                <div className="social-links mt-3">
                                    <a 
                                        href="https://www.facebook.com/RedPackage4.0/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="social-link facebook"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a 
                                        href="https://www.instagram.com/redpackage/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="social-link instagram"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a 
                                        href="https://www.linkedin.com/company/redpackagesas/?viewAsMember=true" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="social-link linkedin"
                                    >
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center mt-5">
                        <Col md={10}>
                            <div className="map-container">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=your-map-embed-url"
                                    width="100%" 
                                    height="400" 
                                    style={{border:0}} 
                                    allowFullScreen="" 
                                    loading="lazy"
                                    title="Red Package Location"
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </div>
    );
}

export default Landingrp;