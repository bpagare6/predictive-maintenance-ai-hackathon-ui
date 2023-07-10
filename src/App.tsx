import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@src/pages/Home';
import PageNotFound from '@src/pages/PageNotFound';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
