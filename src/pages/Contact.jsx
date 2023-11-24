import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    /*emailjs.send('<YOUR_SERVICE_ID>','<YOUR_TEMPLATE_ID>', templateParams, '<YOUR_PUBLIC_KEY>')
 	    .then((response) => {
     console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
     console.log('FAILED...', err);
    }); */

    // console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
    // console.log(import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID);
    // console.log(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
    // console.log("Form Values:", form);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Maria",
          from_email: form.email,
          to_email: "info@hellomaria.dev",
          message: form.message,
        },

        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);

        // TODO: Show success message
        // TODO: Hide an alert
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        // TODO: Show success message
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh] ">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Your Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Maria Vasquez"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your email
            <textarea
              type="email"
              name="email"
              className="input"
              placeholder="info@hellomaria.dev"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              type="text"
              rows={8}
              name="message"
              className="input"
              placeholder="How I can help you?"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
