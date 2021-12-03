import styled from "styled-components";

interface IPostImage {
  height?: string,
  width?: string,
}

export const FPostCard = styled.div`
  display: flex;
  background: #201b2f;
  border-radius: 10px;
  color: white;
  transition: all 0.2s ease;
  backface-visibility: hidden;
  transform: translateZ(0);
  margin: 0.5em 0;
  width: 100%;

  @media (max-width: 768px) {
    max-height: auto;
    height: 160px;
  }
`;

export const FPostBody = styled.div`
  cursor: pointer;
`;

export const FPostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;
  margin: 0;
  width: 100%;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const FPostImg = styled.div`
  margin: 0;
  min-width: 100px;
  min-height: 140px;
  border-radius: 10px 0 0 10px;
  position: relative;
  height: ${(p: IPostImage) => p.height ? p.height : '140px'};
  width: ${(p: IPostImage) => p.width ? p.width : '100px'};

  img {
    background-position: center;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
    margin: 0;
    padding: 0;
  }
`;

export const FPostTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 3px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const FPostDescription = styled.p`
  color: #a3a3a3;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

`;
