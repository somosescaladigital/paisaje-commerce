import LandingClient from './LandingClient';
import './landing.css';

export const metadata = {
    title: "Paisajismo y Sentidos | Escuela de Paisajismo",
    description: "Escuela de Paisajismo y Coaching por Mariana. Logra tu emprender de nuestra mano con mente, hábitos y disciplina.",
};

export default function LandingPage() {
    return (
        <div className="landing-page">
            <LandingClient />
            
            {/* Navbar */}
            <nav className="navbar" id="navbar">
                <div className="logo">
                    <a href="#inicio">
                        <img src="/landing/assets/logoico.png" alt="Logo" />
                        <span>Paisajismo</span> y <span>Sentidos</span>
                    </a>
                </div>
                <ul className="nav-links" id="nav-links">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#nosotros">Marian</a></li>
                    <li><a href="#formacion">Formación</a></li>
                    <li><a href="#sesiones">Recursos Exclusivos</a></li>
                    <li><a href="#reseñas">Reseñas</a></li>
                </ul>
                <div className="nav-actions">
                    <a href="https://wa.me/5491158219017" target="_blank" className="btn-primary">Contacto</a>
                    <div className="hamburger" id="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header id="inicio" className="hero">
                <div className="hero-bg">
                    <img src="/landing/assets/herobg.png" alt="Paisajismo y Sentidos Jardín Sereno" />
                </div>
                <div className="hero-content glass-card fade-in">
                    <h1>Educando profesionales con <span className="highlight">propósito</span>.</h1>
                    <p>Escuela de Paisajismo. Logra tu emprender de nuestra mano. Mente, hábitos y disciplina para resultados
                        reales.</p>
                    <div className="cta-group">
                        <a href="#formacion" className="btn-primary">Conoce la Formación</a>
                        <a href="#sesiones" className="btn-secondary">Recursos exclusivos</a>
                    </div>
                </div>
            </header>

            {/* About Section */}
            <section id="nosotros" className="about">
                <div className="about-grid container">
                    <div className="about-image slide-in-left">
                        <div className="img-wrapper">
                            <img src="/landing/assets/about_mariana_1773770913192.png" alt="Mariana - Paisajista y Coach" />
                        </div>
                    </div>
                    <div className="about-text slide-in-right" style={{ textAlign: 'center' }}>
                        <h2 className="section-title">Sobre Marian</h2>

                        <p className="subtitle">Paisajista & Coach</p>
                        <p>Pasé años diseñando jardines y acompañando a profesionales del paisajismo — hasta que entendí que el
                            verdadero obstáculo no era técnico. Era mental.</p>
                        <p>Soy paisajista, coach y emprendedora. Combino el conocimiento profundo del diseño, la agronomía y los
                            negocios con herramientas reales de desarrollo personal para que puedas construir una carrera que te
                            llene y te dé resultados.</p>
                        <p>En mi escuela no solo aprendés a diseñar jardines hermosos. Aprendés a monetizarlos, a presentarte
                            con confianza y a emprender con claridad — sin perderte en el camino.</p>

                        <p className="closing-quote">
                            Porque una cosa es saber el oficio.<br />
                            Otra muy distinta es vivir de él.
                        </p>

                        <a href="https://instagram.com/paisajismoysentidos" target="_blank" className="btn-primary"
                            style={{ marginTop: '1rem' }}>Conocé más en Instagram</a>
                    </div>
                </div>
            </section>

            {/* La Escuela Section */}
            <section id="escuela" className="school-section">
                <h2 className="section-title light">La Escuela</h2>
                <p className="subtitle light pt-4">PAISAJISMO Y SENTIDOS — PARA LATINOAMÉRICA</p>
                <div className="school-grid container">
                    <div className="school-text slide-in-left">
                        <p className="school-tagline">Creamos una escuela diferente. Una donde el diseño de paisajes se enseña junto
                            con la mentalidad emprendedora — porque las dos cosas son inseparables si querés vivir de este
                            oficio.</p>

                        <div className="tech-pills">
                            <span className="pill">Diseño</span>
                            <span className="pill">Agronomía</span>
                            <span className="pill">Presupuestos</span>
                            <span className="pill">Dibujo técnico</span>
                            <span className="pill">Materiales</span>
                            <span className="pill">Emprendimiento</span>
                        </div>

                        <div className="school-body">
                            <p>Trabajamos con profesionales de Argentina y toda América Latina que quieren formarse en serio,
                                construir su propio negocio y dejar de depender de la suerte o del boca a boca.</p>
                        </div>

                        <p className="emphatic-quote-left">
                            No enseñamos solo a diseñar jardines.<br />
                            <span>Enseñamos a construir carreras.</span>
                        </p>
                    </div>
                    <div className="school-image slide-in-right">
                        <div className="img-wrapper">
                            <img src="/landing/assets/school_studio.png" alt="Escuela de Paisajismo Studio" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Proposals Section (Membership) */}
            <section id="formacion" className="proposals-membership">
                <div className="container">
                    <div className="membership-header center fade-in" style={{ textAlign: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            <h2 className="section-title">Membresía</h2>
                            <p className="membership-brand">Paisajismo y Sentidos</p>
                            <p className="subtitle mt-4">FORMACIÓN ANUAL PARA PAISAJISTAS</p>
                        </div>
                        <p className="membership-intro">No es un curso. Es un acompañamiento real durante todo el año para
                            transformarte en paisajista profesional con un emprendimiento que funcione de verdad.</p>
                    </div>

                    <div className="proposals-grid fade-in">
                        <div className="membership-details-card glass-card">
                            <div className="details-content">
                                <h3 className="details-title">¿Qué incluye?</h3>
                                <p className="details-subtitle">TU ACCESO ANUAL COMPLETO</p>
                                <p className="details-description">Aprendés el oficio desde adentro: diseño, agronomía, materiales,
                                    presupuestos y dibujo técnico. Y también trabajamos lo que nadie te enseña: cómo construir
                                    un negocio con propósito.</p>

                                <ul className="benefit-list">
                                    <li><span className="icon">🌿</span> Clases grabadas disponibles todo el año</li>
                                    <li><span className="icon">👥</span> Encuentros en vivo mensuales con la comunidad</li>
                                    <li><span className="icon">✨</span> Comunidad privada de paisajistas</li>
                                    <li><span className="icon">📋</span> Herramientas, plantillas y recursos de trabajo</li>
                                    <li><span className="icon">🚀</span> Seguimiento real de tu proceso emprendedor</li>
                                </ul>
                            </div>
                            <div className="membership-cta center fade-in" style={{ textAlign: 'center' }}>
                                <a href="https://chat.whatsapp.com/LQYPCDCUNhKA9zYa65kckR?mode=gi_t" target="_blank"
                                    className="btn-primary">Quiero unirme a la Membresía</a>
                            </div>
                        </div>

                        {/* Bonus Section */}
                        <div id="sesiones" className="bonus-section glass-card">
                            <div className="bonus-content">
                                <h3 className="bonus-title">Recursos exclusivos</h3>
                                <p className="bonus-subtitle">BONUS ESPECIALES PARA LA COMUNIDAD</p>
                                <p className="bonus-description">Al sumarte, accedés a kits digitales con descarga inmediata,
                                    pensados para potenciar tu negocio en cada etapa del año.</p>

                                <div className="kit-card">
                                    <div className="kit-image" style={{ backgroundImage: "url('/landing/assets/kit_otono.png')" }}></div>
                                    <div className="kit-info">
                                        <p className="kit-label">KIT DESCARGABLE — TEMPORADA</p>
                                        <h4 className="kit-title">Kit de Otoño</h4>
                                        <p className="kit-description">Todo lo que necesitás para planificar tus trabajos de la
                                            temporada: plantas, fechas clave y estrategia. Listo para usar.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="membership-cta center fade-in" style={{ textAlign: 'center' }}>
                                <a href="https://wa.me/5491158219017" style={{ backgroundColor: 'beige', color: '#1A3C34' }}
                                    target="_blank" className="btn-primary">Quiero comprar este kit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section id="reseñas" className="reviews-section">
                <div className="container">
                    <div className="reviews-header fade-in" style={{ textAlign: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            <h2 className="section-title center">Lo que dicen nuestros alumnos</h2>
                            <p className="subtitle mt-4">EXPERIENCIAS REALES EN LA ESCUELA</p>
                        </div>
                    </div>

                    <div className="reviews-grid">
                        {[
                            { name: "Marcela Navarro", role: "Alumna de la Membresía", text: "¡Hola Marian, buen día! Estuve de vacaciones y recién volvimos la semana pasada. Estoy tomando las clases y quería agradecer y felicitarlos porque la membresía está excelente 👏" },
                            { name: "Sabrina Soledad", role: "Alumna de la Membresía", text: "Con mucha alegría te doy gracias Mariam. 🌿 Ser parte de esta membresía significa compartir la pasión por la naturaleza, el trabajo con la tierra y la belleza de los jardines. Invitándonos también a que más personas se sumen a este hermoso equipo." },
                            { name: "Maria Arbilla", role: "Desde Uruguay", text: "Marian, estoy encantada con las clases, muy claras, con mucho contenido práctico y teórico. Estoy muy contenta de estar haciendo esta carrera con Uds. Desde Uruguay muy feliz." },
                            { name: "Mariela Soledad", role: "Alumna de la Maestría", text: "Hola Marian, ¿cómo estás? Estoy muy contenta con la maestría, me encantó y me da mucho incentivo para emprender, ¡que es mi meta este año! Muchas gracias por la oportunidad." },
                            { name: "Gilda Leguizamon", role: "Alumna de Paisajismo", text: "Hola Mariam, quiero expresar mi más sincero agradecimiento por el apoyo incondicional. El contenido es muy enriquecedor y estoy deseando aplicarlo a mi trabajo de paisajismo. 🫂" }
                        ].map((review, i) => (
                            <div key={i} className={`review-card glass-card fade-in ${i % 2 !== 0 ? 'delay-1' : ''}`}>
                                <div className="review-content">
                                    <div className="quote-icon">“</div>
                                    <p className="review-text">{review.text}</p>
                                    <div className="review-footer">
                                        <div className="author-info">
                                            <h4 className="author-name">{review.name}</h4>
                                            <p className="author-role">{review.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="logo">
                        <img src="/landing/assets/logoico.png" style={{ backgroundColor: 'beige', borderRadius: '50%' }} alt="Paisajismo y Sentidos Logo" />
                    </div>
                    <p>Escuela de Paisajismo y Emprendimiento</p>
                    <div className="socials">
                        <a href="https://instagram.com/paisajismoysentidos" target="_blank" className="instagram-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" fill="currentColor">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                            <span>Instagram (@paisajismoysentidos)</span>
                        </a>
                    </div>
                    <p style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.7 }}>&copy; 2026 Paisajismo y Sentidos. Todos los derechos reservados.</p>
                </div>
            </footer>

            {/* Floating WhatsApp Button */}
            <a href="https://wa.me/5491158219017" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.6 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.5 5.5-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
            </a>
        </div>
    );
}
