import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="Contact container-fluid">

            <div className="row">
                <div className="left-column col-md-8">
                    <div>

                        <h1>Gianmarco Procida</h1>
                        <h2>Front-end Developer<br />and Designer</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus.
                        </p>

                    </div>

                    <div class="buttons-cont container">

                        <button>About me</button>
                        <button>My Resumee</button>

                    </div>

                    <div>
                    <p className="location container"><span><img src="/assets/icons/location-mark.png" alt="location-mark" /></span> Cluj-Napoca, Romania</p>
                    </div>

                    <div className="media-icons">

                        <a href="https://www.linkedin.com/in/gianmarco-procida/" target="_blank"><img className="icon-smedia-cont" src="/assets/icons/linked-in-onHover.png" alt="linkedIn-icon" /></a>
                        <a href="https://github.com/Jimmy-dingo" target="_blank"><img className="icon-smedia-cont" src="/assets/icons/gitHub-onHover.png" alt="gitHub-icon" /></a>
                        

                    </div>
                </div>
                <div className="right-column col-md-4">

                    <div className="form-cont container">

                        <h3>Contact me<br />for more info</h3>
                        <form className="form">
                            <section className="form-in">

                                <input type="text" className="form-fields" name="name" data-displayname="Name" placeholder="Your name" required />
                                <input type="text" className="form-fields" name="surname" data-displayname="Surname" placeholder="Your surname" required />
                                <input type="text" className="form-fields" name="number" data-displayname="Number" placeholder="Your phone number" required />
                                <textarea className="form-fields" name="message" data-displayname="Message" placeholder="Leave a message" required />
                                <button className="send-btn" type="submit">Send</button>

                            </section>
                        </form>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Contact;