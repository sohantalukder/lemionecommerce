import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './screens/cart/Cart';
import Footer from './screens/components/Footer/Footer';
import Header from './screens/components/Header/Header';
import Home from './screens/Home/Home';
import ViewProduct from './screens/ViewProduct/ViewProduct';
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<main className="App-header">
					<Routes>
						{/* <Home /> */}
						<Route exact path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/product/:id" element={<ViewProduct />} />
						<Route path="/cart">
							<Route index element={<Cart />} />
							<Route path=":id" element={<Cart />} />
						</Route>
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
