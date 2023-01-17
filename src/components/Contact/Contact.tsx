import { contact } from '../../portfolio';
import './Contact.scss';

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <p className='link email_link'>
        <a href={`mailto:${contact.email}`}>
          huseyn.akh@gmail.com
        </a>
      </p>
    </section>
  )
}

export default Contact;
