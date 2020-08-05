import React from 'react';

const Education = () => {
    return (
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
    )
}


export default Education;