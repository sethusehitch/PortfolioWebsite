import React from 'react';
import './Styles/About.css';

class About extends React.Component {

	render() {
		return (
			<div className="About">
				<div className="AboutHeading">About</div>
				<div className="AboutParagraph">
					<p>
						I'm a founder and software engineer in San Francisco. I work at OpenAI and am building Hitch, a voice-first AI product for personal agency and follow-through. Previously, I built products and systems at Stripe and Lyft.
						<br/><br/>
						Outside of work, I'm usually playing volleyball, doing Pilates, reading, traveling, or listening to classic rock, funk, and pop. I write about software, systems, product-building, and the experiments that make life work a little better.
						<br/><br/>
						I'm interested in thoughtful technology that gives people more agency, and in meeting people who care deeply about what they build and how they live.
					</p>
				</div>
			</div>
			
		)
	}
}

export default About;
