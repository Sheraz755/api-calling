import React from "react";
import heroSection from "../assets/heroPizza.svg";
import Products from "../components/Products";
const Home = () => {
	return (
		<div>
			<div className='flex justify-between items-center mx-10'>
				<div className='mx-10'>
					<p className='font-semibold'>Are You Hungry?</p>
					<h1 className='text-3xl font-bold mt-10'>Don’t Wait!</h1>
					<button
						style={{
							backgroundColor: "#FFC463",
							padding: "3px 10px",
							borderRadius: "20px",
							marginTop: "40px",
							color: "white",
						}}>
						Order Now
					</button>
				</div>
				<div className='w-2/4'>
					<img src={heroSection} alt='' />
				</div>
			</div>
			<div className='mx-20 mt-24'>
				<Products />
			</div>
		</div>
	);
};

export default Home;
