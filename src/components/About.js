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
          I'm a Junior Software Engineer currently working as a Software Development Teaching Assistant at <a target="_blank" rel="noreferrer" href="https://www.seo-usa.org/">
          Sponsor's for Educational Opportunity</a>. I recently graduated from a full stack software engineering program
					at <a target="_blank" rel="noreferrer" href="https://www.kenzie.academy/">Kenzie Academy</a>. I also work part time at Kenzie as a JavaScript Fundamentals
          Coach. The technologies I work with include: <a target="_blank" rel="noreferrer" href="https://kotlinlang.org/">Kotlin</a>, <a target="_blank" rel="noreferrer" 
          href="https://www.w3schools.com/java/java_intro.asp">Java</a>, <a target="_blank" rel="noreferrer" href="https://www.python.org/">Python</a>, <a target="_blank" 
          rel="noreferrer" href="https://expressjs.com/">Express</a>, <a target="_blank" 
          rel="noreferrer" href="https://reactjs.org/">React</a>, and <a target="_blank" rel="noreferrer" href="https://nodejs.org/en/about/">Node</a>.
          I'm comfortable with Mac, Windows, Android Studio, IntelliJ, Pycharm and Visual Studio Code.
          <br/><br/>In my free time, I like skateboarding, which you can see on my <a target="_blank" rel="noreferrer" href=
          "https://www.instagram.com/noahcams/">Instagram</a>, playing Xbox
          with friends and spending time with my lovely fiancé Danielle and our dog Ori.
				</Card.Body>
			</Card>
		</div>
	);
}
