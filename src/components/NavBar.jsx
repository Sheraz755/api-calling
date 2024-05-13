import React from "react";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
const NavBar = () => {
	return (
		<nav className='flex justify-between items-center mx-10 my-9'>
			<div className=''>
				<img src={logo} alt='' />
			</div>
			<div className='flex items-center'>
				<li className='list-none'>Home</li>
				<li className='list-none ml-6'>Cart</li>
				<li
					className='list-none ml-6  flex items-center'
					style={{
						backgroundColor: "#FFC463",
						padding: "3px 10px",
						borderRadius: "20px",
						width: "70px",
					}}>
					<span className='text-white'>10</span>
					<img src={cart} alt='' />
				</li>
			</div>
		</nav>
	);
};

export default NavBar;
