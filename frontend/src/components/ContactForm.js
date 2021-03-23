import React from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      waiting: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    const self = this;
    self.setState({ waiting: true });
    event.preventDefault();
    const data = {};

    const formData = new FormData(event.target);
    for (var [key, value] of formData.entries()) {
      data[key] = value;
    }

    try {
      const contact_api =
        process.env.CONTACT_API ||
        "https://3rh9xg5aqb.execute-api.us-east-1.amazonaws.com/prod/email";
      const response = await fetch(contact_api, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const json = await response.json();
      if (json.status === "success") {
        document.getElementById("contactForm").reset();
        self.setState({ waiting: false });
        self.props.onSubmit();
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

  render() {
    return (
      <div className="p-2">
        <form
          id="contactForm"
          onSubmit={this.handleSubmit}
          className="mx-auto md:w-1/2"
        >
          <label
            className="block mb-2 text-m font-bold tracking-wide"
            htmlFor="name"
          >
            Name
          </label>

          <input
            className="w-full mb-6 form-input neu-inset border-0 rounded-lg border-b-2  border-red-500"
            id="name"
            placeholder="Phillip J. Fry"
            type="text"
            name="name"
          />

          <label
            className="block mb-2 text-m font-bold tracking-wide"
            htmlFor="email"
          >
            Email
          </label>

          <input
            className="w-full mb-6 form-input neu-inset border-0 rounded-lg border-b-2  border-red-500"
            id="email"
            placeholder="person@email.com"
            type="text"
            name="email"
          />

          <label
            className="block mb-2 text-m font-bold tracking-wide"
            htmlFor="message"
          >
            How can I help?
          </label>

          <textarea
            className="w-full mb-6 form-input neu-inset border-0 rounded-lg border-b-2  border-red-500"
            id="message"
            placeholder="I had this idea for an awesome AR filter..."
            rows="6"
            name="message"
          />

          <label
            className="block mb-2 text-m font-bold tracking-wide"
            htmlFor="challenge"
          >
            What is 5 + 4?
          </label>

          <input
            className="w-full mb-6 form-input neu-inset border-0 rounded-lg border-b-2  border-red-500"
            id="challenge"
            placeholder="Your answer here"
            type="text"
            name="challenge"
          />

          <div className="w-full flex justify-center">
            <button
              className="text-gray-100 text-xl font-bold bg-red-500 neu-border-button rounded-full px-6 py-2"
              disabled={this.state.waiting}
            >
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
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
