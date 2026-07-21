import React from 'react';
import './Styles/Landing.css';
import LinkedInLogo from './Images/logo-linked-in.png';
import YouTubeLogo from './Images/logo-youtube.png';
import GitHubLogo from './Images/logo-github.png';
import EmailLogo from './Images/logo-email.png';

class Landing extends React.Component {
	render() {
		return (
			<div className="Section">
				<div className="Slogan">
					Founder, Hitch.<br />
					OpenAI.<br />
					San Francisco.
				</div>
				<div>
					<a href="https://www.linkedin.com/in/seth-saperstein/" target="_blank" rel="noopener noreferrer"><img src={LinkedInLogo} alt="LinkedIn Logo" className="LinkedInLogo" /></a>
					<a href="https://www.youtube.com/channel/UC4qLRnMVVs1TMoGE-bisZ-w?view_as=subscriber" target="_blank" rel="noopener noreferrer"><img src={YouTubeLogo} alt="YouTube Logo" className="YouTubeLogo"/></a>
					<a href="https://github.com/sethsaperstein" target="_blank" rel="noopener noreferrer"><img src={GitHubLogo} alt="GitHub Logo" className="GitHubLogo" /></a>
					<a href="mailto:sethsaper@gmail.com"><img src={EmailLogo} alt="Email Logo" className="EmailLogo" /></a>
				</div>
			</div>
		)
	}
}

export default Landing;
