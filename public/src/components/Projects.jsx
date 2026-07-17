import { useState } from 'react'
import '../styles/Projects.css'
import viktoriaBistro from '../assets/viktoria-bistro.png'
import babyGuard from '../assets/baby.jpg'

function Projects() {
  const [openDescriptionId, setOpenDescriptionId] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Sales & Inventory System',
      tags: [
        { label: 'UI/UX', filled: true },
        { label: 'Capstone', filled: false },
        { label: 'Full-Stack', filled: false },
      ],
      description:
        'POS and inventory platform for a restaurant that needed something better than what they were paying for.',
      overview: {
        subtitle: 'Web POS, Inventory & Analytics Platform . Capstone',
        summary:
          "A custom web-based Point-of-Sale and Inventory Management System developed for Viktoria's Bistro, integrating ordering, ingredient-level inventory, kitchen coordination, sales analytics, and delivery into a unified platform. As the Lead Programmer, I led a team of four, guided the technical implementation, maintained code quality and system consistency, translated system designs into scalable solutions, and contributed extensively to both frontend and backend development.",
        meta: [
          {
            label: 'TOOLS',
            value: 'Figma . HTML / CSS / JS . Node.js . Bootstrap . Firebase . PayMongo . Python + OpenCV (OMR)',
          },
          { label: 'TIMELINE', value: '2024 - 2025 . Capstone, STI College Las Pi\u00F1as' },
          { label: 'CLIENT', value: "Viktoria's Bistro . Imus, Cavite, Philippines" },
        ],
      },
      image: viktoriaBistro,
      imageAlt: "Viktoria's Bistro sales and inventory system homepage",
      liveUrl: 'https://jcbautista281839.github.io/finallll/',
    },
    {
      id: 2,
      title: 'BabyGuard IoT System',
      tags: [
        { label: 'IoT', filled: true },
        { label: 'Award-Winning', filled: false },
        { label: 'Full-Stack', filled: false },
      ],
      description:
        'Arduino-powered smart crib with real-time monitoring, caregiver alerts, and a web dashboard for infant care.',
      details: [
        'Won 1st Place (IT Division) at the Exploring the Future of Robotics competition and received awards for Best Project, Best Application, and Best App Designer.',
        'Led a team of four in developing BabyGuard, an Arduino-based smart crib equipped with moisture, sound, motion, and temperature sensors, automated swing control, and lullaby playback features.',
        'Designed and developed a web-based dashboard for real-time monitoring, caregiver notifications, and system management.',
        'Created the UI/UX design using Canva and contributed to the design and construction of the smart crib prototype.',
        'Collaborated with team members to integrate hardware components, sensor monitoring, and web-based functionalities into a complete infant care solution.',
      ],
      image: babyGuard,
      imageAlt: 'BabyGuard IoT baby monitoring system',
      liveUrl: '',
      reverse: true,
    },
  ]

  const toggleDescription = (id) => {
    setOpenDescriptionId((current) => (current === id ? null : id))
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-heading">PROJECTS</h2>

        <div className="projects-list">
          {projects.map((project) => {
            const isOpen = openDescriptionId === project.id

            return (
              <article
                key={project.id}
                className={`project-case${project.reverse ? ' project-case--reverse' : ''}`}
              >
                <div className="project-visual">
                  {project.image ? (
                    <img src={project.image} alt={project.imageAlt} className="project-image" />
                  ) : (
                    <div className="project-image-fallback" aria-hidden="true">
                      <span>{project.title}</span>
                    </div>
                  )}
                </div>

                <div className="project-copy">
                  <h3 className="project-case-title">{project.title}</h3>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className={`project-tag${tag.filled ? ' project-tag--filled' : ''}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>

                  <p className="project-description">{project.description}</p>

                  {isOpen && project.overview && (
                    <div className="project-overview">
                      <p className="project-overview-subtitle">{project.overview.subtitle}</p>
                      {project.overview.summary && (
                        <p className="project-overview-summary">{project.overview.summary}</p>
                      )}
                      <dl className="project-meta">
                        {project.overview.meta.map((item) => (
                          <div key={item.label} className="project-meta-row">
                            <dt>{item.label}</dt>
                            <dd>{item.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}

                  {isOpen && project.details && (
                    <ul className="project-details">
                      {project.details.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}

                  <div className="project-actions">
                    {project.liveUrl && (
                      <a
                        className="project-cta"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live View
                      </a>
                    )}

                    <button
                      type="button"
                      className={`project-cta project-cta--secondary${isOpen ? ' is-active' : ''}`}
                      onClick={() => toggleDescription(project.id)}
                      aria-expanded={isOpen}
                    >
                      Description
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
