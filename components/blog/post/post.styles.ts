import styled from 'styled-components';

export const PostContent = styled.section`
  width: 100%;
`;

export const Header = styled.div`
  img {
    border-radius: 50%;
  }
`;

export const PostTitle = styled.h1`
  font-size: 3rem;
  line-height: 4rem;
  letter-spacing: -2px;
  margin: 0.5em 0 0.25em 0;

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
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
  padding-bottom: 5em;

  .markdown-content {
    width: 100%;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    font-family: 'Inter', sans-serif;

    img {
      width: 100%;
      border-radius: 5px;
      margin: 0.5em 0;
    }

    iframe {
      margin: 1em 0;
      width: 100%;
    }

    p {
      margin: 1em 0;
    }

    li {
      margin: 10px 0;
    }

    h3 {
      font-size: 1.5rem;
      margin-top: 0.5em;
    }

    h2 {
      position: relative;
      width: fit-content;
      margin-top: 1rem;

      &:after {
        position: absolute;
        margin: auto 0;
        content: '';
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 15px;
        background-color: ${({ theme }) => theme.blogpostsubtitle};
        z-index: -1;
      }
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
        content: '';
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 15px;
        background-color: ${({ theme }) => theme.blogpostsubtitle};
        z-index: -1;
      }
    }

    a {
      text-decoration: none;
      background-color: ${({ theme }) => theme.blogpostsubtitle};
      padding: 1px 3px;
      border-radius: 5px;
      color: ${({ theme }) => theme.text};
    }
  }
`;
