import {
  SearchInput,
  SearchWrapper,
  SearchInputIcon,
} from "./searchbar.styles";
import { FaSearch } from "react-icons/fa";
import React from "react";

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const SearchBar: React.FC<Props> = ({ onChange }) => {
  return (
    <SearchWrapper>
      <SearchInput
        placeholder="Search through my articles..."
        onChange={onChange}
      />
      <SearchInputIcon>
        <FaSearch color="8273af" />
      </SearchInputIcon>
    </SearchWrapper>
  );
};

export default SearchBar;
