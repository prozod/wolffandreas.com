import styled from 'styled-components';

export const Anchor = styled.a`
  display: flex;
`;

export const CardContent = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin: 0.5em 0;
  padding: 1em 0.5em 1em 1.5em;
  border-radius: 0 10px 10px 0;
  transition: all 0.15s ease;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid rgba(0, 0, 0, 0.05);
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.05));

  &:hover {
    cursor: pointer;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    height: 100%;
    background-color: ${({ theme }) => theme.accent};
  }
  &:hover:before {
    width: 5px;
    transition: all 0.15s ease;
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostTitle = styled.h1`
  font-size: 1rem;
`;

export const PostDescription = styled.p`
  color: #a3a3a3;
  margin: 5px 0;
  font-size: 0.9rem;
  margin-bottom: 7px;
`;

export const PostCategory = styled.div`
  padding: 2.5px 7px;
  background-color: ${(props) => props.color};
  width: min-content;
  border-radius: 5px;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  width: fit-content;
  color: #191919;
`;
