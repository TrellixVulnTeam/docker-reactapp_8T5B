import React from 'react'
import '../styles/about.css'


function About() {
    return (
      <div className="background-main-container">
        <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                I'm a <strong>Full Stack Web Developer</strong> building the
                Front-end and the Back-end of Websites and Web Applications that leads to the
                success of the overall product. Check out some of my work in the
                <strong> Projects</strong> section.
              </p>
              <p className="about__content-details-para">
                I also like sharing content related to the stuff that I have
                learned over the years in <strong>Web Development</strong> so it
                can help other people of the Dev Community. Feel free to Connect
                or Follow me on my
                <a className="linkedin" rel="noreferrer" href="https://linkedin.com/in/rammcodes" target="_blank">Linkedin</a>
                where I post useful content related to Web Development and
                Programming
              </p>
              <p className="about__content-details-para">
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to
                <strong>contact</strong> me.
              </p>
            </div>
            <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr">Contact</a>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">React</div>
              <div className="skills__skill">SASS</div>
              <div className="skills__skill">GIT</div>
              <div className="skills__skill">Github</div>
              <div className="skills__skill">Responsive Design</div>
              <div className="skills__skill">SEO</div>
              <div className="skills__skill">Terminal</div>
              <div className="skills__skill">Express Basics</div>
              <div className="skills__skill">SQL Basics</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
}

export default About
