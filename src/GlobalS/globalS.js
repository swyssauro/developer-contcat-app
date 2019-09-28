import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:100,400&display=swap');

::-webkit-scrollbar-track {
    background-color: black;
}
::-webkit-scrollbar {
    width: 0px;
    background: #F4F4F4;
}
::-webkit-scrollbar-thumb {
    background: #5c8cd7;
}
html {
    background-color: #fff;
}

`;