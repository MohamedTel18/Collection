import React from 'react'
import './Contact.css'
import message from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "2f8f08bc-e8d1-475d-be7d-faa0a4aced47");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
    };

  return (
    <div className="Contact">
      <div className="contact-col">
        <h3>Send us a message <img src={message} alt="message icon" className='msg-icon'/></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail} alt="mail icon" /> Contact@GreatStack.dev</li>
            <li><img src={phone} alt="phone icon" /> +1 123-456-7890</li>
            <li><img src={location} alt="location icon" /> 77 Massachusetts Ave, Cambridge <br /> MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Your Name</label>
            <input type="text"  name="name" required placeholder='Enter your name' />

            <label htmlFor="phone">Phone Number</label>
            <input type="tel"  name="phone" required placeholder='Enter your phone number'/>

            <label htmlFor="email">Your Email</label>
            <input type="email"  name="email" required placeholder='Enter your email'/>

            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="4" required placeholder='Enter your message'></textarea>

            <button type="submit" className='submit-btn'>Submit now <img src={arrow} alt="arrow icon" /></button>
            <span>{result}</span>
        </form>
      </div>
    </div>
  )
}

export default Contact
