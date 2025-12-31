import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) throw new Error("Failed to send");

    setSubmitted(true);
  } catch (err) {
    alert("Failed to send message. Please try again later.");
  }
};


  const styles = {
    container: {
      maxWidth: "800px",
      margin: "60px auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    intro: {
      maxWidth: "700px",
      marginBottom: "20px",
      lineHeight: "1.7",
      color: "#444",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      background: "#fafafa",
      padding: "24px",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    },
    label: {
      fontWeight: "bold",
      color: "#333",
    },
    input: {
      padding: "10px 12px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "14px",
    },
    textarea: {
      padding: "10px 12px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "14px",
      resize: "vertical",
    },
    button: {
      marginTop: "10px",
      padding: "12px",
      border: "none",
      borderRadius: "6px",
      backgroundColor: "#ff7a00",
      color: "#fff",
      fontSize: "15px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    thankYou: {
      padding: "30px",
      backgroundColor: "#f0fff4",
      border: "1px solid #b2f5ea",
      borderRadius: "10px",
      color: "#065f46",
    },
    contactInfo: {
      marginTop: "40px",
      paddingTop: "20px",
      borderTop: "1px solid #ddd",
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>

      <p style={styles.intro}>
        We’d love to hear from you! Whether you have suggestions, questions about
        a recipe, or feedback to help improve Gourmetly, our team is always ready
        to listen. Fill out the form below and we’ll get back to you as soon as
        possible.
      </p>

      {submitted ? (
        <div style={styles.thankYou}>
          <h2>Thank you, {form.name}!</h2>
          <p>
            Your message has been successfully received. We’ll get back to you
            soon.
          </p>
        </div>
      ) : (
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Your Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Write your message here..."
            value={form.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          ></textarea>

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      )}

      <div style={styles.contactInfo}>
        <h3>Other Ways to Reach Us</h3>
        <p>Email: support@gourmetly.app</p>
        <p>Hours: Monday – Friday, 9:00 AM – 5:00 PM</p>
      </div>
    </div>
  );
}

export default Contact;
