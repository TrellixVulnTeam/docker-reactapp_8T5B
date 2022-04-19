import React from 'react'
import '../styles/footer.css'

function Footer() {
  return (
  <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/manuel-beledo-89816892/">
                <img className="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png" alt="Manuel Beledo Linkedin Profile"/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/manubeledo">
                <img className="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png" alt="Manuel Beledo Github Profile"/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://twitter.com">
                <img className="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/ef67339f7016cb09ba66366c1dc9145ac69f2a21/feca1/assets/png/twitter-ico.png" alt="Manuel Beledo Twitter Profile"/>
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h2 className="heading heading-sm text-lt">Manuel Beledo</h2>
            <p className="main-footer__short-desc">
              A FullStack focused Web Developer building the Frontend and the Backend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
        </div>
        <div className="main-footer__lower">
          © Copyright <script>document.write(new Date().getFullYear())</script>2022. Made by 
          <a rel="noreferrer" target="_blank" href="#about"> Manuel Beledo</a>
        </div>
      </div>
  </footer>
  )
}

export default Footer