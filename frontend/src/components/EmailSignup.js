import React from "react";

const EmailSignup = () => {
  return (
    <>
      <div className="emailoctopus-form-wrapper emailoctopus-form-unstyled null text-gray-900 p-6">
        <h2 className="emailoctopus-heading text-center text-xl">
          Subscribe to my list
        </h2>
        <p className="emailoctopus-success-message"></p>
        <p className="emailoctopus-error-message"></p>
        <form
          action="https://emailoctopus.com/lists/09932cf8-64bf-11eb-a3d0-06b4694bee2a/members/embedded/1.3/add"
          method="post"
          data-message-success="Thanks for subscribing!"
          data-message-missing-email-address="Your email address is required."
          data-message-invalid-email-address="Your email address looks incorrect, please try again."
          data-message-bot-submission-error="This doesn't look like a human submission."
          data-message-consent-required="Please check the checkbox to indicate your consent."
          data-message-invalid-parameters-error="This form has missing or invalid fields."
          data-message-unknown-error="Sorry, an unknown error has occurred. Please try again later."
          className="emailoctopus-form flex flex-col justify-center"
        >
          <div className="emailoctopus-form-row mx-auto">
            <label htmlFor="field_0">Email address</label>
            <input
              id="field_0"
              name="field_0"
              type="email"
              placeholder="person@example.com"
              required="required"
              className="ml-2 p-2 border-b border-solid w-auto border-gray-700"
            />
          </div>
          <div className="emailoctopus-form-row-consent mt-2 mx-auto">
            <input type="checkbox" id="consent" name="consent" />
            <label htmlFor="consent" className="ml-2 text-sm">
              I consent to receiving your newsletter and understand my email
              address will be stored in your system.
            </label>
          </div>
          <div aria-hidden="true" className="emailoctopus-form-row-hp mx-auto">
            <input
              type="text"
              name="hpc4b27b6e-eb38-11e9-be00-06b4694bee2a"
              tabIndex="-1"
              autoComplete="nope"
            />
          </div>
          <div className="emailoctopus-form-row-subscribe flex justify-center mx-auto">
            <input type="hidden" name="successRedirectUrl" />
            <button
              type="submit"
              className="text-gray-100 text-xl font-bold bg-red-500 neu-border-button rounded-full px-6 py-2"
            >
              Get the guide
            </button>
          </div>
        </form>
        <div className="emailoctopus-rewards text-center mt-8 text-sm">
          Powered by
          <a
            href="https://emailoctopus.com/?urli=LB542&amp;utm_medium=user_referral&amp;utm_source=builder"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {" "}
            EmailOctopus
          </a>
        </div>
      </div>
      <script src="https://emailoctopus.com/bundles/emailoctopuslist/js/1.6/form-embed.js"></script>
    </>
  );
};

export default EmailSignup;
