import styled from "styled-components";

export const FPostCard = styled.div`
  display: flex;
  background: #201b2f;
  border-radius: 10px;
  color: white;
  transition: all 0.2s ease;
  backface-visibility: hidden;
  transform: translateZ(0);
  margin: 0.5em 0;
  max-height: 120px;
`;

export const FPostBody = styled.div`
  cursor: pointer;
`;

export const FPostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const FPostImg = styled.div`
  margin: 0;
  min-width: 100px;
  min-height: 120px;
  width: 100px;
  height: 120px;
  border-radius: 10px 0 0 10px;

  img {
    background-position: center;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
    margin: 0;
    padding: 0;
  }
`;

export const FPostTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 3px;
`;

export const FPostDescription = styled.p`
  color: #a3a3a3;
  font-size: 0.75rem;
`;
