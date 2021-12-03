import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400;500;600;700&display=swap');

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
  background-color: #110E1B;
  font-family: 'IBM Plex Sans', sans-serif;
  display: flex;
  flex-direction: column;
  flex: 1;
    
    // @media (max-width: 768px) {
    // width: 90%;
    // }
}

.AppWrapper {
    width: 50%;
    margin: 0 auto;
    transition: all 0.2s ease;

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
	background-color: #110E1B;
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
	background-color: #4745b9;
}

`;
