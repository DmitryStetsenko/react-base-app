import React, { useState } from 'react';
import AppRoutes from './components/AppRoutes';
import { AuthContex } from './context';

const App = () => {
	const [isAuth, setIsAuth] = useState(false);
	return (
		<AuthContex.Provider value={ {isAuth, setIsAuth} }>
			<div className="App">
				<AppRoutes />
			</div>
		</AuthContex.Provider>
	);
}

export default App;



