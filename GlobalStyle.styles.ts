import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *:before, *:after, html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}


body {
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-direction: column;
  flex: 1;
  transition: all 0.5s linear;
    
    // @media (max-width: 768px) {
    // width: 90%;
    // }
}

a {
  color: ${({ theme }) => theme.text};
  text-decoration: none;
}

.AppWrapper {
    width: 40%;
    margin: 0 auto;
    transition: all 0.2s ease;

    @media (max-width: 1500px) {
    width: 60%;
    }

    @media (max-width: 1400px) {
    width: 80%;
    }
    
    @media (max-width: 768px) {
    width: 90%;
    }
}

body::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: ${({ theme }) => theme.scrollbarbg};
}

body::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}
body::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: ${({ theme }) => theme.scrollbar};
}

// ANIMATIONS

 @keyframes pulse {
            0% {
                transform: scale(.95);
                opacity: 0.8;
            }
  
            50% {
                transform: scale(1.05);
                opacity: 1;
            }
  
            100% {
                transform: scale(.95);
                opacity: 0.8;
            }
        }


.pulse { 
  animation-name: pulse;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  animation-play-state: running;
}

`;
