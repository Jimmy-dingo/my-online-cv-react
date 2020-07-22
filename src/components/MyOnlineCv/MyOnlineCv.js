import React from 'react';
import './MyOnlineCv.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyOnlineCv = () => {
    return (
        <>
            <section className="my-online-cv container-fluid">

                <div className="container">

                    <div className="section-title">
                        <h1>My Online CV</h1>
                        <h2>A little section about my experience</h2>
                    </div>

                    <div className="cv-content">

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

                                <div className="skill-set row">

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

                                    <div className="col-3">
                                        <h3>Result Oriented</h3>
                                        <img src="/assets/icons/signpost.svg" alt="result-oriented-icon" />
                                    </div>

                                    <div className="col-3">
                                        <h3>Eye for detail</h3>
                                        <img src="/assets/icons/eyeglasses.svg" alt="eye-for-detail-icon" />
                                    </div>

                                    <div className="col-3">
                                        <h3>Analytical mindset</h3>
                                        <img src="/assets/icons/bar-chart-line.svg" alt="analytical-mindset-icon" />
                                    </div>

                                    <div className="col-3">
                                        <h3>Willingness to learn</h3>
                                        <img src="/assets/icons/book.svg" alt="willingness-to-learn-icon" />
                                    </div>

                                </div>

                                <div className="skill-set row">

                                    <div className="col-3">
                                        <h3>Teamwork</h3>
                                        <img src="/assets/icons/people.svg" alt="teamwork-icon" />
                                    </div>

                                    <div className="col-3">
                                        <h3>Creativity</h3>
                                        <img src="/assets/icons/brush.svg" alt="creativity-icon" />
                                    </div>

                                    <div className="col-3">
                                        <h3>Integrity</h3>
                                        <img src="/assets/icons/hand-thumbs-up.svg" alt="integrity-icon" />
                                    </div>

                                    <div className="col-3">
                                        <h3>Adaptability</h3>
                                        <img src="/assets/icons/diagram-3.svg" alt="adaptability-icon" />
                                    </div>

                                </div>
                            </div>


                        </section>

                        <section className="education-section">

                            <div className="content-type">
                                <h2>Education</h2>
                                <hr />
                            </div>

                            <div className="experience row">

                                <div className="experience-title col-sm-4">
                                    <h2>Scoala Informala de IT</h2>
                                    <h3>Mar 2020 - Ongoing</h3>
                                    <img src="/assets/icons/logo_siit.png" alt="scoala-de-it-logo" />
                                </div>

                                <div className="experience-body col-sm-8">
                                    <h3>Course - Web Development (JavaScript)</h3>
                                    <p><strong>Web Concepts:</strong> How the web works, Client-Server architecture, protocols <br />
                                        <strong>HTTP: fundamentals about the protocol:</strong> methods, status codes, headers, cookies and sessions<br />
                                        <strong>HTML and CSS:</strong> how to build a responsive User Interface with semantic HTML elements<br />
                                        <strong>JavaScript:</strong> how to use variables, primitive types, functions, hoisting, objects, scope, DOM, AJAX & Promises <br />
                                        <strong>OOP in JavaScript:</strong> prototypes, classes and inheritance in JavaScript <br />
                                        <strong>GIT:</strong> learned the principles and basic commands <br />
                                        <strong>jQuery:</strong> how to include it in a project and how to use it, why it’s helpful, selectors <br />
                                        <strong>React JS:</strong> how modern JS applications work, React components, props, state, JSX <br />
                                        <strong>Team project:</strong> built the front-end part of an IMBD-like application (using a provided API), with the following functionalities: CRUD operations on movies, basic search, pagination, registration and login; we’ve used GitHub for code versioning and Asana for the project management part
                                    </p>

                                </div>
                                <p className="location container"><span><img src="/assets/icons/location-mark.png" alt="location-mark" /></span> Cluj-Napoca, Romania</p>

                            </div>

                            <div className="experience row">

                                <div className="experience-title col-sm-4">
                                    <h2>UNIPA - Faculty of Architecture</h2>
                                    <h3>Oct 2010 - Mar 2016</h3>
                                    <img src="/assets/icons/LogoUNIPA.png" alt="unipa-logo" />
                                </div>

                                <div className="experience-body col-sm-8">
                                    <h3>Bachelor - Urbanism and Town Planning</h3>
                                    <p>Specialised knowledge and an understanding of how cities and sites are constructed, physically and socially.
                                    Objectives of strategic place-making and the integration of land use with transport and infrastructure, as part of the dynamic fabric of a city.
                                            </p>
                                </div>

                                <p className="location container"><span><img src="/assets/icons/location-mark.png" alt="location-mark" /></span> Palermo, Italia</p>
                            </div>

                        </section>

                        <section className="prof-exp-section">

                            <div className="content-type">
                                <h2>Professional Experience</h2>
                                <hr />
                            </div>

                            <div className="experience row">

                                <div className="experience-title col-sm-4">
                                    <h2>Enkindle Digital SRL</h2>
                                    <h3>Jan 2018 - Ongoing</h3>
                                    <img src="/assets/icons/logo-enkindle.png" alt="enkindle-digital-logo" />
                                </div>

                                <div className="experience-body col-sm-8">
                                    <h3>Freelancer - Digital designer</h3>
                                    <p>-<strong>Social Media Management</strong>: online presence care of various businesses. <br />
                                    -<strong>Website design and configuration</strong> (HTML, CSS, WordPress configuration, SEO concepts)<br />
                                    -<strong>Branding.</strong> (Visual Identity development, logo conceptualization, digital branded artworks)<br />
                                    -<strong>Graphic design projects</strong> (business cards design, flyers design, banners, covers)<br />
                                        <br />
                                        <strong>Tools: HTML, CSS, WordPress, Illustrator.</strong>
                                    </p>

                                </div>
                                <p className="location container"><span><img src="/assets/icons/location-mark.png" alt="location-mark" /></span> Cluj-Napoca, Romania</p>

                            </div>

                            <div className="experience row">

                                <div className="experience-title col-sm-4">
                                    <h2>Neusoft EDC</h2>
                                    <h3>Jan 2019 - Oct 2019</h3>
                                    <img src="/assets/icons/neusoft-edc-logo.png" alt="neusoft-edc-logo" />
                                </div>

                                <div className="experience-body col-sm-8">
                                    <h3>1st level IT/EN Support </h3>
                                    <p>
                                        <strong>Project-based contract:</strong> The Project Scope was aimed to assist an online feedback company with their customer standard onboarding process, as well as to provide efficient and speedy customer support in 5 languages: French, Italian, Spanish, English and German. <br />
                                        <br />
                                        <strong>Responsibilities:</strong> <br />
                                    -Processing incoming client inquiries via chat, phone and email<br />
                                    -Liaising with other departments to solve inquiries<br />
                                    -Performing troubleshooting<br />
                                    -Assisting clients with system setup<br />
                                        <br />
                                        <strong>Tools: Jira, Intercom, Zendesk, Outlook, Notepad++, basic HTML/CSS/JS knowledge.</strong>
                                    </p>

                                </div>
                                <p className="location container"><span><img src="/assets/icons/location-mark.png" alt="location-mark" /></span> Cluj-Napoca, Romania</p>

                            </div>

                            <div className="experience row">

                                <div className="experience-title col-sm-4">
                                    <h2>SYKES Enterprises Incorporated</h2>
                                    <h3>Dec 2016 - Dec 2018</h3>
                                    <img src="/assets/icons/sykes-logo-sqblue.png" alt="sykes-logo" />
                                </div>

                                <div className="experience-body col-sm-8">
                                    <h3>Social Media Technical support representative</h3>
                                    <p>
                                        -Answer to to inquiries and comments on established channels in real time, Androidworld, Honor Italia Official Forum, Zopim, Huawei.it, Honor.it, Official Facebook\Twitter Huawei Mobile.<br />
                                        -Use of platforms as Radian and Social studio to take part of the statistic analysis of the issues aimed to improve the quality of the product.<br />
                                        -Educate customers about our products and services.<br />
                                        -Coordinates questions and issues with the appropriate department.<br />
                                        -Technical knowledge of Huawei & Honor products.<br />
                                    </p>

                                </div>
                                <p className="location container"><span><img src="/assets/icons/location-mark.png" alt="location-mark" /></span> Cluj-Napoca, Romania</p>

                            </div>


                        </section>

                        <section className="skills-section">

                            <div className="content-type">
                                <h2>Languages</h2>
                                <hr />
                            </div>

                            <div className="skill-set row">

                                <div className="col-3">
                                    <h3>Italian</h3>
                                    <img src="/assets/icons/italian-flag.png" alt="italian-flag" />
                                    <p>Native</p>
                                </div>

                                <div className="col-3">
                                    <h3>English</h3>
                                    <img src="/assets/icons/english-flag.png" alt="english-flag" />
                                    <p>Advanced</p>
                                </div>

                                <div className="col-3">
                                    <h3>Spanish</h3>
                                    <img src="/assets/icons/spanish-flag.png" alt="spanish-flag" />
                                    <p>Advanced</p>
                                </div>

                                <div className="col-3">
                                    <h3>Romanian</h3>
                                    <img src="/assets/icons/romania-flag.png" alt="romanian-flag" />
                                    <p>Medium</p>
                                </div>

                            </div>

                        </section>


                    </div>

                </div>

            </section>
        </>
    )
}

export default MyOnlineCv;