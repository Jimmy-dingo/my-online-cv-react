import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';

const Form = () => {
    const [showModal, setShowModal] = useState(false);

    const modalSubmission =
        <div className={`${showModal ? "modal-submission" : "hide"}`}>
            <img src="/assets/icons/icon-menu-close.png" onClick={() => setShowModal(!showModal)} />
            <h2>Thank you for contacting me!</h2>
            <p>I will answer to you request as soon as possible</p>
            <img src="/assets/icons/smile.svg" />
        </div>;

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'contact_form_online_cv', e.target, 'user_2T9WPUe3YgnTsCCgGGdYp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

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
                    <button className="send-btn" type="submit" value="Send" onClick={() => setShowModal(!showModal)}>Send</button>

                </section>
            </form>

            {modalSubmission}

        </div>
    )
}

// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "",
//             surname: "",
//             number: "",
//             email: "",
//             message: ""
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     };

//     handleChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value });
//     };

//     handleSubmit = (e) => {
//         e.preventDefault();
//         emailjs
//             .sendForm(
//                 "gmail",
//                 "contact_form_online_cv",
//                 "form", //*this parametwer helps emailJS to read the inputs form the form
//                 "user_2T9WPUe3YgnTsCCgGGdYp"
//             )
//             .then()
//             .catch();
//         this.setState({
//             name: "",
//             surname: "",
//             number: "",
//             email: "",
//             message: ""
//         });
//     };

//     render() {
//         return (
//             <div className="form-cont container">

//                 <h3>Contact me<br />for more info</h3>
//                 <form className="form" onSubmit={this.handleSubmit.bind(this)}>
//                     <section className="form-in">

//                         <input type="text" id="name" className="form-fields" name="name" placeholder="Your name" value={this.state.name} onChange={this.handleChange.bind(this)} required />
//                         <input type="text" className="form-fields" name="surname" placeholder="Your surname" value={this.state.surname} onChange={this.handleChange.bind(this)} required />
//                         <input type="text" className="form-fields" name="number" placeholder="Your phone number" value={this.state.number} onChange={this.handleChange.bind(this)} required />
//                         <input type="text" className="form-fields" name="email" placeholder="Your email address" value={this.state.email} onChange={this.handleChange.bind(this)} required />
//                         <textarea className="form-fields" name="message" placeholder="Leave a message" value={this.state.message} onChange={this.handleChange.bind(this)} required />
//                         <button className="send-btn" type="submit">Send</button>

//                     </section>
//                 </form>

//             </div>
//         )
//     }
// }

export default Form;