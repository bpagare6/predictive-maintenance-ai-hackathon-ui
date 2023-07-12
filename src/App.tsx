import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@src/pages/Home';
import SystemDetails from '@src/pages/SystemDetails';
import PageNotFound from '@src/pages/PageNotFound';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/systemDetails" element={<SystemDetails/>} />
				<Route path="*" element={<PageNotFound />} />
				{/* <Route path="/prediction" element={<Prediction />} /> */}
				
			</Routes>
		</BrowserRouter>
	);
}

export default App;
