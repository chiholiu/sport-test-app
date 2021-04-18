import { useDispatch } from "react-redux";
import { filterProduct } from "../../../../../actions/index";
import { Navbar, Input } from "./SearchInput.styles";

export const SearchInput = () => {
  const dispatch = useDispatch();

  const getSearch = inputValue => {
    const capitalizedLetters = inputValue.toUpperCase();
    dispatch(filterProduct(capitalizedLetters));
  };

  return (
    <Navbar>
      <Input
        aria-label="search-input"
        placeholder="Search"
        onChange={e => getSearch(e.target.value)}
      />
    </Navbar>
  );
};
