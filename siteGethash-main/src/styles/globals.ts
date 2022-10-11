import { createGlobalStyle, DefaultTheme } from 'styled-components'


export const theme:DefaultTheme = {
    fontColor: '',
    color : {
        primary: '#502E88',
        second: '#F6F6F6',
        third: '#9700de'
    },
    buttonColor: {
        primary:'#630092',
        second: '#9700de'
    }
}


export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        align-items: center;
        text-decoration: none;
    }

    html{
       
        color: white;
    }

    a, button {
        cursor: pointer;

    }

    button{
        border: none;
    }
   
`