import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      waiting: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRecaptchaToken = this.getRecaptchaToken.bind(this);
  }

  handleSubmit(event) {
    const self = this;
    self.setState({ waiting: true });
    event.preventDefault();
    const data = {};

    const formData = new FormData(event.target);
    for (var [key, value] of formData.entries()) {
      data[key] = value;
    }

    this.getRecaptchaToken(async function(err, token) {
      console.log(err);
      if (err) {
        self.setState({ waiting: false });
        alert("Sorry, there was a problem submitting your message");
      } else {
        data.token = token;
        try {
          const response = await fetch(process.env.CONTACT_API, {
            method: "POST",
            body: JSON.stringify(data)
          });
          const json = await response.json();
          if (json.status === "success") {
            document.getElementById("contactForm").reset();
            self.setState({ waiting: false });
            alert("Thanks! I'll be in touch shortly");
          } else {
            self.setState({ waiting: false });
            alert("Sorry, there was a problem submitting your message");
          }
        } catch (err) {
          self.setState({ waiting: false });
          alert("Sorry, there was a problem submitting your message");
        }
      }
    });
  }

  getRecaptchaToken(done) {
    window.grecaptcha.ready(function() {
      try {
        window.grecaptcha
          .execute(process.env.RECAPTCHA_KEY, { action: "contactForm" })
          .then(function(token) {
            return done(null, token);
          });
      } catch (e) {
        return done(e);
      }
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Contact" />
        <section>
          <form
            id="contactForm"
            onSubmit={this.handleSubmit}
            className="mx-auto md:w-1/2 text-gray-300"
          >
            <label
              className="block mb-2 text-m font-bold tracking-wide"
              htmlFor="first-name"
            >
              First Name
            </label>

            <input
              className="w-full mb-6 form-input neu-inset bg-gray-800 border-0  rounded-lg border-b-2  border-mbmYellow"
              id="first-name"
              placeholder="Phillip"
              type="text"
              name="firstName"
            />

            <label
              className="block mb-2 text-m font-bold tracking-wide"
              htmlFor="last-name"
            >
              Last Name
            </label>

            <input
              className="w-full mb-6 form-input neu-inset bg-gray-800 border-0 rounded-lg  border-b-2 border-mbmYellow"
              id="last-name"
              placeholder="Fry"
              type="text"
              name="lastName"
            />

            <label
              className="block mb-2 text-m font-bold tracking-wide"
              htmlFor="email"
            >
              Email
            </label>

            <input
              className="w-full mb-6 form-input neu-inset bg-gray-800 border-0 rounded-lg border-b-2 border-mbmYellow"
              id="email"
              placeholder="person@email.com"
              type="text"
              name="email"
            />

            <label
              className="block mb-2 text-m font-bold tracking-wide"
              htmlFor="message"
            >
              Message
            </label>

            <textarea
              className="w-full mb-6 form-textarea neu-inset bg-gray-800 border-0 rounded-lg border-b-2 border-mbmYellow"
              id="message"
              placeholder="Say something..."
              rows="8"
              name="message"
            />

            <button className="px-4 py-2 h-16 text-sm font-bold neu-border-button rounded-lg bg-mbmCoral">
              <div className="flex items-center tracking-wide">
                Submit
                <img
                  alt="Running alien"
                  className={`${
                    this.state.waiting ? `block` : `hidden`
                  } w-12 min-w-0 flex-shrink`}
                  src="https://media.giphy.com/media/Phg5BqsiMHDJQeNURr/giphy.gif"
                />
              </div>
            </button>
          </form>
        </section>
      </Layout>
    );
  }
}

export default ContactPage;
