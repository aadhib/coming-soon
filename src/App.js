import React from 'react';
import { ReactComponent as Logo } from './logo/SVG/logo.svg';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo-container">
            <Logo className="logo-icon" />
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Honoring Lives, Cherishing Memories.</h1>
            <p>Reverence.ie is your dedicated platform for sharing death notices, family notices, and heartfelt tributes across Ireland.<br></br>
              We are working tirelessly to bring you a meaningful and respectful space where families and communities can connect, remember,<br></br>
              and celebrate the lives of loved ones.</p>
          </div>
          <a href="mailto:info@reverence.ie">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>💙 Reverence.ie – Because every life deserves to be remembered.</span>
        </div>
      </div>
    );
  }
}

export default App;
