import React, { useState, useEffect } from 'react'
import CustomCursor from '../components/common/CustomCursor'
import ParticleBackground from '../components/common/ParticleBackground'
import Navigation from '../components/common/Navigation'
import AnimatedSection from '../components/common/AnimatedSection'
import ProjectGrid from '../components/home/ProjectGrid'
import TypingText from '../components/home/TypingText'
import type { MousePosition } from '../types/index'
import { projects } from '../utils/projectsData'

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (!isTouchDevice) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="home">
      <ParticleBackground />
      <CustomCursor mousePosition={mousePosition} />
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <AnimatedSection animation="zoomIn">
              <div className="profile-image-container">
                <img 
                  src="./assets/img/yo.jpg" 
                  alt="Pablo Martín Mielgo" 
                  className="profile-image"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={300}>
              <h1 className="hero-title">Pablo Martín Mielgo</h1>
              <p className="hero-subtitle">Desarrollador Full Stack</p>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={600}>
              <TypingText />
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={900}>
              <div className="hero-buttons">
                <button 
                  className="btn-primary"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Proyectos
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contactar
                </button>

                <button
                  className="btn-primary"
                  onClick={() => window.open('https://github.com/Mielgo98', '_blank')}
                >
                  Repositorio de Git
                </button>
              </div>

              
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <AnimatedSection animation="fadeInUp">
            <h2 className="section-title">Sobre Mí</h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="about-content">
              <p>
               Soy un desarrollador full stack con una fuerte orientación a la creación de soluciones web que aporten valor real.
               Me motiva aprender continuamente, adoptar nuevas tecnologías y afrontar retos que me permitan crecer profesionalmente.
               Disfruto transformando ideas en productos funcionales, cuidando tanto la lógica interna como la experiencia de usuario.

               Me considero una persona proactiva, resolutiva y comprometida con el desarrollo de software de calidad, siempre con la mirada puesta en la mejora constante.
              </p>
              <div className="skills-preview">
                {/* Lenguajes y Frameworks */}
                <span className="skill-tag">Java & Spring Boot</span>
                <span className="skill-tag">Python & FastAPI</span>
                <span className="skill-tag">JavaScript & React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>

                {/* Bases de datos */}
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">pgvector</span>
                <span className="skill-tag">SQL</span>

                {/* APIs y Librerías */}
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">Thymeleaf</span>
                <span className="skill-tag">Bootstrap 5</span>
                <span className="skill-tag">Stripe</span>
                <span className="skill-tag">Sentence Transformers</span>
                <span className="skill-tag">FAISS</span>

                {/* Herramientas y prácticas */}
                <span className="skill-tag">Git & GitHub</span>
                <span className="skill-tag">Control de versiones</span>
                <span className="skill-tag">Integración de APIs externas</span>
                <span className="skill-tag">Embeddings semánticos</span>
                <span className="skill-tag">Documentación técnica</span>
                <span className="skill-tag">Resolución de problemas</span>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <AnimatedSection animation="fadeInUp">
            <h2 className="section-title">Mis Proyectos</h2>
            <p className="section-subtitle">
              Explora mi trabajo y descubre las soluciones innovadoras que he desarrollado
            </p>
          </AnimatedSection>
          
          {/* Grid de todos los proyectos */}
          <AnimatedSection animation="fadeInUp" delay={200}>
            <ProjectGrid projects={projects} />
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <AnimatedSection animation="fadeInUp">
            <h2 className="section-title">¿Hablamos?</h2>
            <p className="contact-description">
              Estoy siempre abierto a nuevas oportunidades y colaboraciones interesantes.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="contact-buttons">
              <a href="mailto:pablo@marmie.es" className="btn-primary">Contactar</a>
              <a href="./Pablo_Martin_Mielgo_CV.pdf" target="_blank" className="btn-secondary">Descargar CV</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Home
