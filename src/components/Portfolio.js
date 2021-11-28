import React from 'react';
import { Card } from 'react-bootstrap';
import resume from '../images/resume.jpg';
import movie from '../images/movie-catalog.jpg';
import maze from '../images/maze.jpg';
import dog from '../images/dog.jpg';
import arrayMethods from '../images/array-methods.jpg';

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
					<Card.Title>Movie Catalog</Card.Title>
					<a target="_blank" rel="noreferrer" href="https://github.com/KenzieAcademy-Students/datahandling-assessment-noahcams">
						<img src={movie} alt="movie catalog screenshot" />
					</a>
					<Card.Body>A neatly styled movie catalog with search functionality</Card.Body>
				</Card>
				<Card>
					<Card.Title>Maze</Card.Title>
					<a target="_blank" rel="noreferrer" href="https://github.com/KenzieAcademy-Students/datamodels-nested-arrays-practice-noahcams">
						<img src={maze} alt="screenshot" />
					</a>
					<Card.Body>A project that used nested arrays and loops to generate a maze that the user can 
					traverse through using the arrow keys</Card.Body>
				</Card>
				<Card>
					<Card.Title>Mock Dog Adoption Site</Card.Title>
					<a target="_blank" rel="noreferrer" href="https://github.com/KenzieAcademy-Students/react-speed-dating-assessment-noahcams">
						<img src={dog} alt="dog adoption app screenshot" />
					</a>
					<Card.Body>A React App that allows the user to interact with the random dog api</Card.Body>
				</Card>
				<Card>
					<Card.Title>Array Methods Rewritten</Card.Title>
					<a target="_blank" rel="noreferrer" href="https://github.com/KenzieAcademy-Students/challenge-array-methods-noahcams">
						<img src={arrayMethods} alt="array methods screenshot" />
					</a>
					<Card.Body>JavaScript's built-in array methods rewritten for a coding challenge</Card.Body>
				</Card>
			</React.Fragment>
		</div>
	);
}
