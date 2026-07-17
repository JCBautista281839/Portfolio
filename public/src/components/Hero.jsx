import '../styles/Hero.css'
import profilePhoto from '../assets/ME.png'
import bootstrapIcon from '../assets/Bootstrap (1).png'
import canvaIcon from '../assets/canva-icon.png'
import cssIcon from '../assets/css-3.png'
import cursorIcon from '../assets/cursor-ai-code-icon.png'
import figmaIcon from '../assets/figma.png'
import firebaseIcon from '../assets/Firebase.png'
import githubIcon from '../assets/GitHub.png'
import htmlIcon from '../assets/html-5.png'
import jsIcon from '../assets/js.png'
import mongodbIcon from '../assets/MongoDB.png'
import mysqlIcon from '../assets/mysql-icon.png'
import nodeIcon from '../assets/Node.js.png'
import openaiIcon from '../assets/openai-icon.png'
import phpIcon from '../assets/php.png'
import reactIcon from '../assets/react.png'
import sqlIcon from '../assets/SQL Developer.png'
import tailwindIcon from '../assets/Tailwind CSS.png'
import vscIcon from '../assets/Visual Studio Code (VS Code).png'

const portraitIcons = [
  { src: htmlIcon, alt: 'HTML5', className: 'floating-icon--html', top: '-6%', left: '-16%', delay: '0s', float: '16px' },
  { src: bootstrapIcon, alt: 'Bootstrap', className: 'floating-icon--bootstrap', top: '12%', left: '-20%', delay: '0.3s', float: '21px' },
  { src: cssIcon, alt: 'CSS3', className: 'floating-icon--css', top: '-8%', right: '-8%', delay: '0.7s', float: '22px' },
  { src: reactIcon, alt: 'React', className: 'floating-icon--react', top: '30%', left: '-22%', delay: '0.4s', float: '24px' },
  { src: jsIcon, alt: 'JavaScript', className: 'floating-icon--js', top: '18%', right: '-18%', delay: '1.1s', float: '18px' },
  { src: githubIcon, alt: 'GitHub', className: 'floating-icon--github', top: '40%', right: '-22%', delay: '1.4s', float: '16px' },
  { src: nodeIcon, alt: 'Node.js', className: 'floating-icon--node', top: '42%', left: '-28%', delay: '0.9s', float: '21px' },
  { src: phpIcon, alt: 'PHP', className: 'floating-icon--php', top: '34%', right: '-10%', delay: '1.8s', float: '19px' },
  { src: firebaseIcon, alt: 'Firebase', className: 'floating-icon--firebase', top: '64%', left: '-20%', delay: '0.2s', float: '25px' },
  { src: mysqlIcon, alt: 'MySQL', className: 'floating-icon--mysql', top: '58%', right: '-18%', delay: '1.0s', float: '17px' },
  { src: mongodbIcon, alt: 'MongoDB', className: 'floating-icon--mongodb', top: '76%', left: '-12%', delay: '1.6s', float: '20px' },
  { src: tailwindIcon, alt: 'Tailwind CSS', className: 'floating-icon--tailwind', top: '72%', right: '-14%', delay: '0.5s', float: '23px' },
  { src: figmaIcon, alt: 'Figma', className: 'floating-icon--figma', top: '88%', left: '-8%', delay: '1.2s', float: '18px' },
  { src: canvaIcon, alt: 'Canva', className: 'floating-icon--canva', bottom: '-8%', right: '-8%', delay: '1.9s', float: '15px' },
  { src: cursorIcon, alt: 'Cursor', className: 'floating-icon--cursor', top: '4%', right: '-6%', delay: '0.8s', float: '19px' },
  { src: openaiIcon, alt: 'OpenAI', className: 'floating-icon--openai', top: '56%', left: '-38%', delay: '1.3s', float: '17px' },
  { src: sqlIcon, alt: 'SQL Developer', className: 'floating-icon--sql', bottom: '-12%', left: '4%', delay: '0.6s', float: '16px' },
]

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-copy">
          <p className="hero-kicker">A Philippines based Web developer</p>
          <h1>
            HI, I AM
            <span> JOHN CHRISTIAN BAUTISTA.</span>
          </h1>
          <p className="hero-description">
            Passionate about building accessible and user friendly websites that feel polished, fast, and human.
          </p>
          <div className="hero-actions">
            <a className="cta-button" href="#contact">
              CONTACT ME
              <span aria-hidden="true">•</span>
            </a>
            <a
              className="social-button"
              href="https://www.linkedin.com/in/john-christian-bautista-bbb6a8181/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              className="social-button"
              href="https://github.com/JCBautista281839"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              gh
            </a>
          </div>
        </div>

        <div className="hero-portrait" aria-hidden="true">
          <div className="portrait-stage">
            <div className="floating-icons" aria-hidden="true">
              {portraitIcons.map((icon) => (
                <span
                  key={icon.alt}
                  className={`floating-icon ${icon.className}`}
                  style={{
                    '--delay': icon.delay,
                    '--float': icon.float,
                    top: icon.top,
                    right: icon.right,
                    bottom: icon.bottom,
                    left: icon.left,
                  }}
                >
                  <img src={icon.src} alt="" />
                </span>
              ))}
            </div>
            <div className="portrait-card">
              <img className="portrait-image" src={profilePhoto} alt="Portrait of John Christian Bautista" />
            </div>
            <div className="portrait-fade" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
