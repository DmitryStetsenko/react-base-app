import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import About from './pages/About';
import Posts from './pages/Posts';

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/about" element={ <About /> }/>
				<Route path="/posts" element={ <Posts /> }/>
			</Routes>
		</div>
		
	);
}

export default App;



