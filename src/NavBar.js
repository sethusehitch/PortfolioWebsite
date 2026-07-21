import React from 'react';
import './Styles/NavBar.css';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			togglePressed: false
		};

		this.scrollAbout = props.scrollAbout;
		this.scrollTutorials = props.scrollTutorials;
		this.scrollProjects = props.scrollProjects;
		this.scrollBlogs = props.scrollBlogs;

		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle(e) {
		console.log(this.state.togglePressed);
		this.setState((prevState) => ({
			togglePressed: !prevState.togglePressed
		}));
	}

	render() {
		return (
			<nav className="nav">
			    <ul className="NavBar-Container">
			    	<li onClick={this.handleToggle} id="Toggle">Menu</li>
			        <li><a href="https://www.linkedin.com/in/seth-saperstein/" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
					<li onClick={this.scrollProjects}>PROJECTS</li>
			        <li id="Name">SETH SAPERSTEIN</li>
					<li onClick={this.scrollBlogs}>BLOGS</li>
			        <li onClick={this.scrollTutorials}>TUTORIALS</li>
			    </ul>
			    <DropDown onClick={this.state.togglePressed} scrollAbout={this.scrollAbout} scrollTutorials={this.scrollTutorials} scrollProjects={this.scrollProjects} scrollBlogs={this.scrollBlogs}/>
		  </nav>
		)
	}
}


function DropDown(props) {
	if (props.onClick) {
		return (
			<div>
				<ul className="DropDown">
					<li><a href="https://www.linkedin.com/in/seth-saperstein/" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
					<li onClick={props.scrollProjects}>PROJECTS</li>
			        <li onClick={props.scrollBlogs}>BLOGS</li>
			        <li onClick={props.scrollTutorials}>TUTORIALS</li>
			        
			    </ul>
			</div>
		)
	}
	
	return (<div/>)
	
}

export default NavBar;
