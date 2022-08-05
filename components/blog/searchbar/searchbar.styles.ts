import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.background};
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1em 1em;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
    outline: 3px solid ${({ theme }) => theme.accent};
    border: none;
  }
`;

export const SearchInputIcon = styled.span`
  height: 100%;
  padding: 1em 1em;
  > svg {
    color: ${({ theme }) => theme.accent};
  }
`;
