import { useEffect, useState } from 'react'
import '../styles/Projects.css'
import bentaOverview from '../assets/benta-overview.png'
import bentaRegister from '../assets/benta-register.png'
import bentaSales from '../assets/benta-sales.png'
import bentaNotifications from '../assets/benta-notifications.png'
import bentaSettings from '../assets/benta-settings.png'
import viktoriaBistro from '../assets/viktoria-bistro.png'
import babyGuard from '../assets/baby.jpg'

function ProjectSlideshow({ images, alt }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return undefined

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="project-slideshow" aria-label={alt}>
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={index === activeIndex ? alt : ''}
          className={`project-image project-slideshow-image${
            index === activeIndex ? ' is-active' : ''
          }`}
          aria-hidden={index !== activeIndex}
        />
      ))}
      <div className="project-slideshow-dots" aria-hidden="true">
        {images.map((src, index) => (
          <span
            key={src}
            className={`project-slideshow-dot${index === activeIndex ? ' is-active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

function Projects() {
  const [openDescriptionId, setOpenDescriptionId] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'BENTA',
      tags: [
        { label: 'Mobile', filled: true },
        { label: 'Personal', filled: false },
        { label: 'Full-Stack', filled: false },
      ],
      description:
        'Personal POS system for Android (iOS coming soon) with register, inventory, sales analytics, and store settings.',
      overview: {
        subtitle: 'Cross-platform POS App . Personal Project',
        summary:
          'BENTA is my personal Point-of-Sale system built for restaurants and small stores. It covers the full register flow—menu ordering, held orders, sales overview, inventory alerts, notifications, and settings—with local backup support. I am building it for Android first, with iOS planned next, using React Native + Expo, Supabase, Next.js, and TypeScript, and accelerating development with Cursor AI.',
        meta: [
          {
            label: 'TOOLS',
            value: 'React Native . Expo . TypeScript . Supabase . Next.js . Cursor AI',
          },
          { label: 'TIMELINE', value: '2026 . Personal Project' },
          { label: 'PLATFORM', value: 'Android available . iOS coming soon' },
        ],
      },
      images: [
        bentaOverview,
        bentaRegister,
        bentaSales,
        bentaNotifications,
        bentaSettings,
      ],
      imageAlt: 'BENTA POS system screenshots',
      liveUrl: '',
      downloadUrl: '/downloads/BENTA-POS.apk',
      downloadLabel: 'Download for Android',
    },
    {
      id: 2,
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
      reverse: true,
    },
    {
      id: 3,
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
            const hasSlideshow = Array.isArray(project.images) && project.images.length > 0

            return (
              <article
                key={project.id}
                className={`project-case${project.reverse ? ' project-case--reverse' : ''}`}
              >
                <div className="project-visual">
                  {hasSlideshow ? (
                    <ProjectSlideshow images={project.images} alt={project.imageAlt} />
                  ) : project.image ? (
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

                    {project.downloadUrl && (
                      <a
                        className="project-cta"
                        href={project.downloadUrl}
                        download="BENTA-POS.apk"
                      >
                        {project.downloadLabel || 'Download'}
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
