import styled from "styled-components";
import { theme } from "../../styles/globals";


export const DropcasesConteiner = styled.div `
        width: 950px;
        height: 270px;
        font-family: 'Space Grotesk', sans-serif;
        display: flex;
        flex-direction: column;
        background-color: rgba(0,0,0,0.9);
        position: absolute;
        top: 75px;
        right: 270px;
        display: none;
       
`

export const CasesConteiner = styled.div`
        display: flex;
        gap: 25px;
        width: 100%;
        justify-content: space-around;
        padding: 20px;
        margin-bottom: 15px;

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
export const Clients = styled.div`
        display: flex;
        flex-direction: column;
       
        h3{
            position: relative;
            bottom: 15px;
                :hover{
                        color: ${theme.color.primary};
                }
        }

        .imgCasesConteiner{
                display: flex;
                gap: 10px;

                img{
                height: 60px;
                width: 48px;
                }
        }        
`
export const LinkforCases = styled.a`
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