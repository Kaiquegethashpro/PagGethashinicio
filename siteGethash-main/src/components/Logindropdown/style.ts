import styled from "styled-components";
import { theme } from "../../styles/globals";


export const LogindropConteiner = styled.div`

            width: 200px;
            height: 379px;
            background-color: #111;
            border: 2px solid #9700de;
            padding: 30px 10px 20px 10px;
            position: absolute;
            left: 947px;
            top: 138px;
            border-radius: 5px;
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 600;           
`
export const TriangleConteiner = styled.div`
       
        width: 200px;
        position: absolute;
        right: -10px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        top: -31px;

        .Triangulogethash{
            position: relative;
            right: 17px;
            z-index: 1;
            margin-top: 1px;
            margin-right: 20px;
            border-left: 25px solid transparent;
            border-right: 25px solid transparent;
            border-bottom: 30px solid #111;
            
            
        }

        .Triangulogethash2{
            position: relative;
            bottom: 35px;
            right: 34px;
            border-left: 28px solid transparent;
            border-right: 28px solid transparent;
            border-bottom: 35px solid ${theme.color.third};
        }

`

export const LoginAreaConteiner = styled.div`

        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;

        div{
            width: 100%;
            padding: 1px;
            background-color: ${theme.color.third};
        }
        
        a{
            background-color: ${theme.color.third};
             padding: 10px; 
             min-width: 150px; 
             text-align: center;  
             border-radius: 4px; 
             color: white;
            transition: 1s;
             :hover{
                background-color: ${theme.color.primary};
                transition: 1s;
             }
        }
`