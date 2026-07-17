import '../styles/Contact.css'

function Contact() {
  const contactItems = [
    {
      label: 'EMAIL',
      value: 'christianbautista265863@gmail.com',
      href: 'mailto:christianbautista265863@gmail.com',
    },
    {
      label: 'PHONE',
      value: '(+63) 961 944 4214',
      href: 'tel:+639619444214',
    },
    {
      label: 'OPEN TO',
      value: 'Web Development . Full-Stack . Freelance',
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-glow contact-glow--one" aria-hidden="true" />
      <div className="contact-glow contact-glow--two" aria-hidden="true" />

      <div className="contact-container">
        <p className="contact-kicker">let's make something</p>
        <h2 className="contact-title">Say Hello.</h2>

        <div className="contact-divider" aria-hidden="true" />

        <div className="contact-grid">
          {contactItems.map((item) => (
            <div key={item.label} className="contact-item">
              <span className="contact-label">{item.label}</span>
              {item.href ? (
                <a className="contact-value contact-value--link" href={item.href}>
                  {item.value}
                </a>
              ) : (
                <span className="contact-value">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
