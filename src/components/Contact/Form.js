import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';

const Form = function () {
  const [showModal, setShowModal] = useState(false);

  const modalSubmission = (
    <div className={`${showModal ? "modal-submission" : "hide"}`}>
      <img src="/assets/icons/icon-menu-close.png" onClick={() => setShowModal(!showModal)} />
      <h2>Thank you for contacting me!</h2>
      <p>I will answer to you request as soon as possible</p>
      <img src="/assets/icons/smile.svg" />
    </div>
  );

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'contact_form_online_cv', e.target, 'user_2T9WPUe3YgnTsCCgGGdYp')
      .then((result) => {
        if (result.text === "OK") {
          setShowModal(!showModal)
        }
      }, (error) => {
        alert(error.text);
      });
  };

  return (
    <div className="form-cont container">

      <h3>Contact me<br />for more info</h3>
      <form className="form" onSubmit={sendEmail}>
        <section className="form-in">

          <input type="text" className="form-fields" name="name" data-displayname="Name" placeholder="Your name" required />
          <input type="text" className="form-fields" name="surname" data-displayname="Surname" placeholder="Your surname" required />
          <input type="text" className="form-fields" name="number" data-displayname="Number" placeholder="Your phone number" required />
          <input type="text" className="form-fields" name="email" data-displayname="Email" placeholder="Your email address" required />
          <textarea className="form-fields" name="message" data-displayname="Message" placeholder="Leave a message" required />
          <button className="send-btn" type="submit" value="Send">Send</button>

        </section>
      </form>

      {modalSubmission}

    </div>
  )
};

export default Form;