import { useRef } from 'react';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/UI/Navbar/Navbar';

export default function Home() {
	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const scrollToHero = (ref) => {
		ref.current.scrollIntoView();
		console.log('successfully scrolled');
	};
	return (
		<>
			<Navbar
				scrollToHero={scrollToHero}
				homeRef={homeRef}
				aboutRef={aboutRef}
			></Navbar>
			<Hero myRef={homeRef}></Hero>
		</>
	);
}
