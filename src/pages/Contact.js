import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>

      <p style={{ maxWidth: '700px', marginBottom: '20px', lineHeight: '1.7' }}>
        We’d love to hear from you! Whether you have suggestions, questions about
        a recipe, or feedback to help improve Gourmetly, our team is always ready
        to listen. Fill out the form below and we’ll get back to you as soon as
        possible.
      </p>

      {submitted ? (
        <div className="thank-you-box">
          <h2>Thank you, {form.name}!</h2>
          <p>Your message has been successfully received. We’ll get back to you soon.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Your Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Write your message here..."
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      )}

      <div className="contact-info">
        <h3>Other Ways to Reach Us</h3>
        <p>Email: support@gourmetly.app</p>
        <p>Hours: Monday – Friday, 9:00 AM – 5:00 PM</p>
      </div>
    </div>
  );
}

export default Contact;
