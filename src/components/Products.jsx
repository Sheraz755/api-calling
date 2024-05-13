import React, { useEffect, useState } from "react";
import peproni from "../assets/peproni.svg";
import axios from "axios";
const Products = () => {
	const [pizzList, setPizzList] = useState([]);
	const getAllProducts = async () => {
		const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
		+console.log(res.data);
		setPizzList(res.data);
	};
	useEffect(() => {
		getAllProducts();
	}, []);
	//get
	//post
	//put
	//delete
	//
	// const pizzList = [
	// 	{
	// 		name: "chicekn tikka",
	// 		size: "large",
	// 		price: "700",
	// 	},
	// 	{
	// 		name: "Halloween Pizza",
	// 		size: "medium",
	// 		price: "600",
	// 	},
	// 	{
	// 		name: "peproni",
	// 		size: "small",
	// 		price: "500",
	// 	},
	// ];

	return (
		<div>
			<h1 className='text-4xl font-bold'>Products</h1>
			<div className='grid grid-cols-4'>
				{pizzList.map((item) => {
					return (
						<div style={{ width: "250px" }} className='mt-10'>
							<img src={peproni} alt='' />
							<h2 className='text-2xl text-center font-bold m-4'>
								{item.title}
							</h2>
							<div className=' flex items-center justify-center mt-5'>
								<span
									className='bg-gray-300 px-5 py-1 text-center'
									style={{ borderRadius: "100px" }}>
									{item.completed}
								</span>
							</div>
							<div className='flex justify-between items-center mt-5'>
								<p>Rs {item.id}</p>
								<button
									style={{
										backgroundColor: "#FFC463",
										padding: "5px 12px",
										borderRadius: "20px",
										// marginTop: "40px",
										color: "white",
									}}>
									Add to Cart
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Products;
