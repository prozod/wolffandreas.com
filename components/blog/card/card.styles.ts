import styled from "styled-components";

export const Anchor = styled.a`
  display: flex;
`;

export const CardContent = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin: 0.5em 0;
  padding: 0.5em 0.5em 0.5em 1em;
  border-radius: 0 10px 10px 0;
  transition: all 0.15s ease;

  &:hover {
    cursor: pointer;
    background-color: #201b2f;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    height: 100%;
    background-color: #8360bc;
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

export const PostTitle = styled.h1`
  font-size: 1.5rem;
`;

export const PostDescription = styled.p`
  color: #a3a3a3;
  margin: 5px 0;
`;


export const PostCategory = styled.div`
  padding: 2.5px 7px;
  background-color: ${(props) => props.color};
  color: white;
  width: min-content;
  border-radius: 5px;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  width: fit-content;
`;
