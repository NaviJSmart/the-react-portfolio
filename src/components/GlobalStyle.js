import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #1b1b1b;
    font-family: 'Poppins', sans-serif;
}

button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 3rem;
   
    border: 2px solid #23d997;
    background: transparent;
    color: #fff;
    transition: all 0.3s ease;
    &:hover {
        background-color: #23d997;
        
    }
}

h2 {
    font-weight: lighter;
    font-size: 4rem;
}

h3 {
    color: #fff;
}

p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
}

.title__hightlight {
    color: #23d997;
}

`

export default GlobalStyle;