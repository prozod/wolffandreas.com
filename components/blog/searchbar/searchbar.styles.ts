import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;
  background-color: #201b2f;
  border-radius: 5px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1em 1em;
  border: none;
  color: white;
  background-color: transparent;

  &:focus {
    outline: none;
    outline: 4px solid #8273af;
    border: none;
  }

  &::placeholder {
    color: #8273af;
  }
`;

export const SearchInputIcon = styled.span`
  height: 100%;
  padding: 1em 1em;
`;
