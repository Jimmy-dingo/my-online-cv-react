import React from 'react'

const Languages = () => {
    return (
        <section className="skills-section">

            <div className="content-type">
                <h2>Languages</h2>
            </div>

            <div className="skill-set-lang row">

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
    )
}

export default Languages;
