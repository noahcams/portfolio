import React from 'react';
import { Card } from 'react-bootstrap';

export default function Contact() {
	return (
		<div className="about-contact">
			<Card className="w-50">
				<Card.Title>Get in Touch</Card.Title>
				<Card.Body>
					<p className="contact-paragraph">
						I'm currently looking for full time opportunities in software
						development. Whether you are interested in working with me or just
						want to say hi, my inbox is always open!
					</p>
					<div className="links">
						<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/noah-camara/">
							<img
								id="linked-in"
								src="https://optionsnoob.com/wp-content/uploads/2019/10/linkedin-logo.png"
								alt="linked in logo"
							/>
						</a>
						<a target="_blank" rel="noreferrer" href="https://github.com/noahcams">
							<img
								id="github"
								src="https://icon-library.com/images/github-icon-white/github-icon-white-5.jpg"
								alt="github logo"
							/>
						</a>
						<a target="_blank" rel="noreferrer"
							id="email"
							href="https://mail.google.com/mail/?view=cm&source=mailto&to=noahcmr@gmail.com"
						>
							<span>📧</span>
						</a>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}
