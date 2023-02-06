import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../redux/actions/productActions';
import CustomLoader from '../components/customLoader/CustomLoader';
import ErrorCard from '../components/errorCard/ErrorCard';
import Product from '../components/Products/Product';

const Home = () => {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;
	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);
	return (
		<div className="py-8 md:py-12 max-w-7xl container sm:px-6 lg:px-8  mx-auto px-5 xl:px-0">
			{loading ? (
				<CustomLoader />
			) : error ? (
				<ErrorCard message={error} />
			) : (
				<>
					<h1 className="font-bold text-xl mb-8 ">Latest Product</h1>
					<div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
						{products.map((product) => (
							<Product key={product?._id} product={product} />
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Home;
