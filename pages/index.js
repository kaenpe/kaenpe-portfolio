import { useRef } from 'react';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import Navbar from '../components/UI/Navbar/Navbar';

export default function Home() {
	const elRef = [useRef(null), useRef(null), useRef(null), useRef(null)];
	const scrollToHero = (num) => {
		elRef[num].current.scrollIntoView({ behavior: 'smooth' });
		console.log('successfully scrolled');
	};
	return (
		<>
			<Navbar scrollToHero={scrollToHero}></Navbar>
			<Hero heroRef={elRef[0]}></Hero>
			<About aboutRef={elRef[1]}></About>
			<Products productsRef={elRef[2]}></Products>
			<Contact contactRef={elRef[3]}></Contact>
		</>
	);
}
