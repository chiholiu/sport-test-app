import { useDispatch } from "react-redux";
import { filterProduct } from "../../../../actions/index";

export const SearchInput = () => {
	const dispatch = useDispatch();
	let input;

	const getSearch = inputValue => {
		const capitalizedLetters = inputValue.toUpperCase();
		dispatch(filterProduct(capitalizedLetters));
	};

	return (
		<div>
			<input
				ref={node => (input = node)}
				aria-label="search-input"
				placeholder="Search"
				onChange={e => getSearch(e.target.value)}
			/>
		</div>
	);
};
