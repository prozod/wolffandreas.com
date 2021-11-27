import styled from 'styled-components'

export const ContactFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  color: white;

  form {
//    background-color: #201B2F;
    display: flex;
    padding: 3em;
    border-radius: 10px;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    min-width: 300px;
    color: white;

    label {
  color: #8273af;
  margin-top: 1em
    }

    input {
      border-radius: 5px;
      color: white;
      background: transparent;
      margin-top: 5px;
      border: 1px solid #8273af; 
      padding: 10px 10px;
    }

    textarea {
      color: white;
      margin-top: 5px;
      border-radius: 5px;
      border: 1px solid #8273af; 
      background: transparent;
      padding: 10px;
    }

    button {
      background: none;
      border: none;
      color: #8273af;
      font-weight: 600;
      border: 1px solid #8273af; 
      margin-top: 1em;
      height: 40px;
      border-radius: 5px;
      transition: all 0.2s ease;

      &:hover {
        cursor: pointer;
        background: #8273af;
        color: #201B2F;
      }
    }
  }
`

export const ErrorMessage = styled.div`
padding: 0.5em 0;
color: #fa4d41;
`

export const Socials = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;

a {
  color: white;
  display: flex;
  align-items: center;
  line-height: 5px;
  justify-content: center;
  text-decoration: none;
  margin: 0 5px;
  padding: 10px 12px;
  border-radius: 5px;

  &:hover {
    background: #201B2F;
  }
}
`

export const SocialIcon = styled.span`
margin: 0 5px;
cursor: pointer;

`
