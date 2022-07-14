import React from 'react';
import { Card } from 'react-bootstrap';
import resume from '../images/resume.jpg';
import maze from '../images/maze.jpg';
import dog from '../images/pup-hub-screenshot.jpg';
import arrayMethods from '../images/array-methods.jpg';
import weatherApp from '../images/weather-app-screenshot.png';

export default function Portfolio() {
	return (
		<div className="portfolio">
			<Card>
				<Card.Title>Resume</Card.Title>
				<a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1a6N00dURyOeqcnGPciBOgpun2ohr3QW7F9X4rh5RrIo/edit?usp=sharing">
					<img id="resume" src={resume} alt="my resume" />
				</a>
			</Card>
			<h3>Projects and coding challenges</h3>
			<React.Fragment className="projects">
				<Card>
					<Card.Title>Weather App</Card.Title>
					<a target="_blank" rel="noreferrer" href="https://github.com/noahcams/weather-app">
						<img src={weatherApp} alt="weather app screenshot" />
					</a>
					<Card.Body>A native Android weather app that uses the <i>All the Weather</i> API within an MVVM architecture</Card.Body>
				</Card>
				<Card>
					<Card.Title>Maze</Card.Title>
					<a target="_blank" rel="noreferrer" href="https://noahcams.github.io/maze/">
						<img src={maze} alt="screenshot" />
					</a>
					<Card.Body>A project that used nested arrays and loops to generate a maze that the user can 
					traverse through using the arrow keys</Card.Body>
				</Card>
				<Card>
					<Card.Title>Pup Hub</Card.Title>
					<a target="_blank" rel="noreferrer" href="https://github.com/noahcams/pup-hub">
						<img src={dog} alt="Dog app screenshot" />
					</a>
					<Card.Body>A <a target="_blank" rel="noreferrer" href="https://stenciljs.com/">Stencil.js</a> App that uses custom web components and the Dog CEO API</Card.Body>
				</Card>
				<Card>
					<Card.Title>Array Methods Rewritten</Card.Title>
					<a target="_blank" rel="noreferrer" href="https://github.com/noahcams/array-methods">
						<img src={arrayMethods} alt="array methods screenshot" />
					</a>
					<Card.Body>JavaScript's built-in array methods rewritten for a coding challenge</Card.Body>
				</Card>
			</React.Fragment>
		</div>
	);
}
