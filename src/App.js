import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Particles from 'react-tsparticles';
import background from './images/blade-runner-wallpaper.jpg';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Portfolio';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<HashRouter>
			<Particles
				options={{
					background: {
						image: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.35)), url(${background})`,
						size: 'cover',
						// position:
					},
					fpsLimit: 60,
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: 'push',
							},
							onHover: {
								enable: true,
								mode: 'repulse',
							},
							resize: true,
						},
						modes: {
							bubble: {
								distance: 400,
								duration: 2,
								opacity: 0.8,
								size: 40,
							},
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: '#ffffff',
						},
						links: {
							color: '#ffffff',
							distance: 150,
							enable: true,
							opacity: 0.5,
							width: 1,
						},
						collisions: {
							enable: false,
						},
						move: {
							direction: 'none',
							enable: true,
							outMode: 'bounce',
							random: false,
							speed: 2,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								value_area: 800,
							},
							value: 80,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: 'circle',
						},
						size: {
							random: true,
							value: 5,
						},
					},
					detectRetina: true,
				}}
			/>
			<NavBar />
			<Routes>
				<Route exact path='/' element={<Header />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
