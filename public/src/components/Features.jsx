import '../styles/Features.css'
import distriphilImg from '../assets/distriphil 1.png'

function Features() {
  const skillGroups = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind', 'Node.js', 'Responsive Web Design']
    },
    {
      title: 'Backend & Tools',
      skills: ['Firebase', 'MySQL', 'GitHub', 'Google Workspace', 'Microsoft Office Suite', 'VS Code', 'XAMPP']
    },
    {
      title: 'UI/UX & Design',
      skills: ['Canva', 'Figma', 'Wireframing', 'Prototyping', 'Responsive Web Design']
    }
  ]

  return (
    <section id="features" className="features">
      <div className="features-container">
        <h2>About</h2>

        <div className="about-skills">
          <div className="experience-layout">
            <div className="about-experience">
              <h3 className="section-heading">EXPERIENCE</h3>
              <div className="exp-item">
                <div className="exp-role">IT Support Intern — Distriphil — Parañaque City, Philippines <span className="exp-year">2026</span></div>
                <ul className="exp-list">
                  <li>Assisted employees with basic computer and laptop troubleshooting</li>
                  <li>Installed and updated software and device drivers</li>
                  <li>Helped set up and configure laptops and desktop computers</li>
                  <li>Performed basic hardware checking and maintenance</li>
                  <li>Assisted in diagnosing laptop issues and errors</li>
                  <li>Helped clean and organize computer equipment and workstations</li>
                </ul>
              </div>
            </div>

            <div className="experience-media">
              <img
                src={distriphilImg}
                alt="Distriphil website shown on a laptop"
                className="experience-image"
              />
            </div>
          </div>

          <h3 className="skills-heading">SKILLS</h3>

          {skillGroups.map((group, idx) => (
            <div key={idx} className="skill-group">
              <div className="group-title">{group.title}</div>
              <div className="skills-row">
                {group.skills.map((s, i) => (
                  <span key={i} className="skill-badge">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
