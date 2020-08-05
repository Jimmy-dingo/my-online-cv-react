import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css';


const Skills = () => {
    return (
        <section className="skills-section">

                            <div className="content-type">
                                <h2>Skills & Abilities</h2>
                                <hr />
                            </div>

                            <div className="skills-subcat">
                                <h2>Hard-skills</h2>
                                <div className="skill-set row">

                                    <div className="col-3">
                                        <h3>HTML5</h3>
                                        <img src="/assets/icons/html5-brands.svg" alt="html-html5-icon" />
                                    </div>

                                    <div className="col-3">
                                        <h3>CSS3</h3>
                                        <img src="/assets/icons/css3-alt-brands.svg" alt="css-css3-icon" />
                                    </div>

                                    <div className="col-3">
                                        <h3>JavaScript</h3>
                                        <img src="/assets/icons/js-brands.svg" alt="javascript-icon" />
                                    </div>

                                    <div className="col-3">
                                        <h3>React.js</h3>
                                        <img src="/assets/icons/react-brands.svg" alt="react-icon" />
                                    </div>

                                </div>

                                <div className="skill-set row of3">

                                    <div className="col-4">
                                        <h3>Illustrator</h3>
                                        <img src="/assets/icons/illustrator_icon.svg" alt="illustrator-icon" />
                                    </div>

                                    <div className="col-4">
                                        <h3>Photoshop</h3>
                                        <img src="/assets/icons/photoshop_icon.svg" alt="photoshop-icon" />
                                    </div>

                                    <div className="col-4">
                                        <h3>SEO</h3>
                                        <img src="/assets/icons/seo.svg" alt="seo-icon" />
                                    </div>

                                </div>
                            </div>

                            <div className="skills-subcat">
                                <h2>Soft-skills</h2>
                                <div className="skill-set row">

                                    <div className="col-md-3 col-sm-6">
                                        <h3>Result Oriented</h3>
                                        <img src="/assets/icons/signpost.svg" alt="result-oriented-icon" />
                                    </div>

                                    <div className="col-md-3 col-sm-6">
                                        <h3>Eye for detail</h3>
                                        <img src="/assets/icons/eyeglasses.svg" alt="eye-for-detail-icon" />
                                    </div>

                                    <div className="col-md-3 col-sm-6">
                                        <h3>Analytical mindset</h3>
                                        <img src="/assets/icons/bar-chart-line.svg" alt="analytical-mindset-icon" />
                                    </div>

                                    <div className="col-md-3 col-sm-6">
                                        <h3>Willingness to learn</h3>
                                        <img src="/assets/icons/book.svg" alt="willingness-to-learn-icon" />
                                    </div>

                                </div>

                                <div className="skill-set row">

                                    <div className="col-md-3 col-sm-6">
                                        <h3>Teamwork</h3>
                                        <img src="/assets/icons/people.svg" alt="teamwork-icon" />
                                    </div>

                                    <div className="col-md-3 col-sm-6">
                                        <h3>Creativity</h3>
                                        <img src="/assets/icons/brush.svg" alt="creativity-icon" />
                                    </div>

                                    <div className="col-md-3 col-sm-6">
                                        <h3>Integrity</h3>
                                        <img src="/assets/icons/hand-thumbs-up.svg" alt="integrity-icon" />
                                    </div>

                                    <div className="col-md-3 col-sm-6">
                                        <h3>Adaptability</h3>
                                        <img src="/assets/icons/diagram-3.svg" alt="adaptability-icon" />
                                    </div>

                                </div>
                            </div>


                        </section>
    )
}


export default Skills;