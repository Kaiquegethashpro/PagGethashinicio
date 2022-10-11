import styled from "styled-components";
import { theme } from "../../styles/globals";


export const DropservicesConteiner = styled.div `
        width: 950px;
        height: 250px;
        font-family: 'Space Grotesk', sans-serif;
        display: flex;
        flex-direction: column;
        background-color: rgba(0,0,0,0.9);
        position: absolute;
        top: 75px;
        right: 270px;
        display: none;
       
`

export const ServicesConteiner = styled.div`
        display: flex;
        gap: 25px;
        width: 100%;
        justify-content: space-around;
        border-bottom: 1px solid;
        padding: 20px;

        .nameCasesConteiner{
            display: flex;
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;

            a{
                color: white;
            }
        }

`

export const LinkforServices = styled.a`
        padding-top: 15px;
        color: white;
        width: 100%;
        text-align: center;
        border-top: 1px solid;
        transition: all .5s;
        :hover{
                color: ${theme.color.second};
                transition: all .5s;
        }
       
`