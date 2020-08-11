import React from 'react';
import Form from './Form';
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

                        <button onClick={()=> window.location.href="/"}>About me</button>
                        <button onClick={()=> window.location.href="/my-online-cv"}>My Resumee</button>

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

                    <Form />

                </div>
            </div>

        </section>
    )
}

export default Contact;