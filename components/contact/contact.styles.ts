import styled from 'styled-components';

export const ContactFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  color: white;

  form {
    display: flex;
    padding: 3em;
    border-radius: 10px;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    min-width: 300px;
    color: ${({ theme }) => theme.text};
    font-size: 0.9rem;

    @media (max-width: 768px) {
      width: 100vw;
    }

    label {
      color: ${({ theme }) => theme.text};
      margin-top: 1em;
    }

    input {
      border-radius: 5px;
      color: ${({ theme }) => theme.text};
      background: transparent;
      margin-top: 5px;
      border: 1px solid ${({ theme }) => theme.text};
      padding: 10px 10px;
    }

    textarea {
      color: ${({ theme }) => theme.text};
      margin-top: 5px;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.text};
      background: transparent;
      padding: 10px;
    }

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.text};
      font-weight: 600;
      border: 1px solid ${({ theme }) => theme.text};
      margin-top: 1em;
      height: 40px;
      border-radius: 5px;
      transition: all 0.1s ease-in-out;
      font-size: 0.75rem;

      &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.accent};
        border: 1px solid ${({ theme }) => theme.accent};
        color: ${({ theme }) => theme.body};
      }
    }
  }
`;

export const ErrorMessage = styled.div`
  padding: 0.5em 0;
  color: #fa4d41;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  a {
    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    line-height: 5px;
    justify-content: center;
    text-decoration: none;
    margin: 0 5px;
    padding: 10px 12px;
    border-radius: 5px;

    @media (max-width: 768px) {
      margin: 0;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SocialIcon = styled.span`
  margin: 0 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.accent};
`;
