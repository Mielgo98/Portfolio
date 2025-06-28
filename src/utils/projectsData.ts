import type { Project } from '../types/index';

export const projects: Project[] = [
  {
    id: 1,
    title: "HomeFlex",
    description: "Plataforma web de gestión de alquileres vacacionales desarrollada con Java y Spring Boot. Incluye funciones de reservas, pagos con Stripe y análisis estadístico.",
    image: "./../homeflex.png",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Thymeleaf", "Stripe", "pgVector", "javascript", "BOOTstrap"],
    link: "https://homeflex.marmie.es/",
    github: "https://github.com/Mielgo98/HomFlex",
    featured: true
  },
  {
    id: 2,
    title: "Eval-IA",
    description:
      "Microservicio en Python + FastAPI para la evaluación inteligente de candidatos. Procesa entrevistas, genera embeddings semánticos, y devuelve rankings basados en similitud.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
    tech: [
      "Python",
      "FastAPI",
      "Sentence Transformers",
      "FAISS",
      "Uvicorn"
    ],
    github: "https://github.com/Eval-ia/backendIA",
    featured: true
  },
  {
    id: 3,
    title: "Gestión de Teatro",
    description: "Sistema interactivo para la gestión y reserva de butacas de teatro con interfaz intuitiva y manejo dinámico del estado.",
    image: "./../GestionTeatro.png",
    tech: ["JavaScript", "HTML5", "CSS3"],
    link: "https://teatro.marmie.es/",
    
    featured: false
  },

  {
    id: 4,
    title: "Portfolio Personal",
    description: "Portfolio profesional desarrollado con React, TypeScript y Vite. Diseño moderno, animaciones suaves y navegación fluida para mostrar habilidades y proyectos.",
    image: "./../favicon.png", 
    tech: ["React", "TypeScript", "Vite"],
    github: "https://github.com/Mielgo98/Portfolio",
    featured: true
  }
];