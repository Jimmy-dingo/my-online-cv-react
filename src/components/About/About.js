import React from 'react';
import './About.css';

const About = () => {
    return (
        <>

            <section className="headline">

                <h1>
                    Gianmarco Procida
                </h1>

                <h2>
                    WebDesigner<span>/</span>Developer
                </h2>

                <div>
                    <button onClick={() => window.location.href = "/portfolio"}>Portfolio</button>
                    <button onClick={() => window.location.href = "/contact"}>Contact</button>
                </div>

            </section>

            <section className="about-me">

                <div className="container">

                    <div className="section-title">
                        <h1>About Me</h1>
                        <h2>A couple of words about me</h2>
                    </div>

                    <div className="row">

                        <div className="col-md-6">
                            <figure>
                                <img src="assets/images/about-me-photo.jpg" alt="my-personal-photo" />
                            </figure>
                        </div>

                        <div className="about-me-description col-md-6">
                            <p>
                                This year I started studying JavaScript to improve my knowledge and be able to implement completely web interfaces.<br /><br /> I love to structure my work to point to top quality elements. Always trying to find a balance between what is beautiful and chatchy and what is functional.<br /><br />
                                JavaScript opened a world for me. I discovered many things that I can do with it and I can spend hours without even realizing it!
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
};

export default About;