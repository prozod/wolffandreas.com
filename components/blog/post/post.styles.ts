import styled from "styled-components";

export const PostContent = styled.section`
  width: 100%;
`;

export const Header = styled.div`
  color: white;

  img {
    border-radius: 50%;
  }
`;

export const PostTitle = styled.h1`
  color: white;
  font-size: 5rem;
  line-height: 4.5rem;
  letter-spacing: 0px;
  margin: 0.5em 0 0.25em 0;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #8273af;
  margin: 1em 0 1.5em 0;
  font-size: 0.75rem;
  font-weight: 600;

  span {
    margin: 0 0.5em;
  }
`;

export const PostAuthor = styled.div`
  margin-left: 0.5em;
`;

export const PostDate = styled.p``;

export const Body = styled.div`
  color: white;
  padding-bottom: 5em;

  .markdown-content {
    width: 100%;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    font-family: "IBM Plex Sans", sans-serif;

    iframe {
      margin: 1em 0;
      width: 100%;
    }

    p {
      margin: 1em 0;
    }

    h1 {
      margin: 1em 0;
      position: relative;
      width: fit-content;
      text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.3);
      filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));

      &:after {
        position: absolute;
        margin: auto 0;
        content: "";
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 15px;
        background-color: #4745b9;
        z-index: -1;
      }
    }

    a {
      text-decoration: none;
      background-color: #4745b9;
      padding: 1px;
      border-radius: 5px;
      color: white;
    }
  }
`;
