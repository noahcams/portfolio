import React from 'react';
import { Card } from 'react-bootstrap';

export default function About() {
	return (
		<div className="about-contact">
			<Card className="w-50">
        <Card.Title>
          Hi, I'm Noah Camara
        </Card.Title>
				<Card.Body>
          I'm an aspiring web developer specializing in creating user-intuitive
					applications. I am currently a full stack software engineering student
					at <a href="https://www.kenzie.academy/">Kenzie Academy</a> and
					working part time as a JavaScript Fundamentals Coach. The technologies I work with
          include: <a href="https://www.mongodb.com/">MongoDB</a>, <a href=
          "https://expressjs.com/">Express</a>, <a href="https://reactjs.org/">React</a>, 
          <a href="https://nodejs.org/en/about/"> Node</a>, and some <a href=
          "https://www.python.org/">Python</a> and <a href="https://www.w3schools.com/java/java_intro.asp">Java</a>.
          I primarily use Windows, Chrome, and Visual Studio Code.
          <br/><br/>In my free time, I
          like skateboarding, which you can see on my <a href=
          "https://www.instagram.com/noahcams/">Instagram</a>, playing Xbox
          with friends and spending time with my lovely fiancé Danielle and our 
          dog Ori.
				</Card.Body>
			</Card>
		</div>
	);
}
