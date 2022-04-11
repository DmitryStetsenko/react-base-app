import React, { useEffect, useState } from 'react';
import AppRoutes from './components/AppRoutes';
import { AuthContex } from './context';

const App = () => {
	const [isAuth, setIsAuth] = useState(false);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true);
		}
		setLoading(false);
	}, []);
	

	return (
		<AuthContex.Provider value={ {isAuth, setIsAuth, isLoading} }>
			<div className="App">
				<AppRoutes />
			</div>
		</AuthContex.Provider>
	);
}

export default App;



