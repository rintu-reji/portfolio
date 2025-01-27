import React, { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct the email body with the input values
    const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Open the default email client with the pre-filled email body
    window.location.href = `mailto:rintucreji@gmail.com?subject=New Contact Form Message&body=${encodeURIComponent(
      emailBody
    )}`;

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="bg-white text-gray-900 py-16 px-8">
      <h2 className="text-4xl font-semibold text-center mb-8">Contact</h2>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-4 border rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border rounded-md"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 mb-4 border rounded-md"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
