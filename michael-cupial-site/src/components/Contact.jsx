import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/a2884dc0-4e52-11ed-8970-6943e4ac8982";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div class="thankYou">
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </div>
    );
  }

  return (
    <div class="contactPage">
      <h2>Contact Us</h2>
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        class="form"
      >
        <div>
          <input
            class="name"
            type="text"
            placeholder="Your name"
            name="name"
            required
          />
        </div>
        <div>
          <input
            class="email"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>
        <div>
          <textarea
            class="message"
            placeholder="Your message"
            name="message"
            required
          />
        </div>
        <div>
          <button class="button btn-hover color-8" type="submit">
            Send a message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
