import React from 'react';
import { SearchInput } from "../View/HomePage/SearchInput/SearchInput";
import Products from "../View/HomePage/Products/Products";

export const HomePage = () => {
	return (
		<div>
			<SearchInput />
			<Products />
		</div>
	);
};
