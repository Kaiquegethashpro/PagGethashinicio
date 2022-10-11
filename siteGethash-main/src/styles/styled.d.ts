import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontColor: string,
    color : {
        primary: string,
        second: string,
        third: string
    },
    buttonColor: {
        primary:string,
        second: string
    }
  }
}