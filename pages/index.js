import { useRef, useState } from 'react';
import Head from 'next/head';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import Navbar from '../components/UI/Navbar/Navbar';

export default function Home() {
	const elRef = [useRef(null), useRef(null), useRef(null), useRef(null)];
	const [active, setActive] = useState('HOME');
	const scrollToRef = (num) => {
		elRef[num].current.scrollIntoView({ behavior: 'smooth' });
		console.log('successfully scrolled');
	};

	return (
		<>
			<Head>
				<title>Kamil Knap's portfolio</title>
			</Head>
			<Navbar scrollToRef={scrollToRef} active={active}></Navbar>
			<Hero
				heroRef={elRef[0]}
				scrollToRef={scrollToRef}
				setActive={setActive}
			></Hero>
			<About aboutRef={elRef[1]} setActive={setActive}></About>
			<Products productsRef={elRef[2]} setActive={setActive}></Products>
			<Contact contactRef={elRef[3]} setActive={setActive}></Contact>
		</>
	);
}
