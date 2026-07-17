import '../styles/Footer.css'

function Footer() {
  const socialLinks = [
    {
      label: 'GITHUB',
      href: 'https://github.com/JCBautista281839',
    },
    {
      label: 'LINKEDIN',
      href: 'https://www.linkedin.com/in/john-christian-bautista-bbb6a8181/',
    },
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copy">&copy; 2026 John Christian Bautista</p>

        <div className="footer-socials">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              className="footer-social-link"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
