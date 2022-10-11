import styled from "styled-components";
import { theme } from "../../styles/globals";


export const DropblogConteiner = styled.div `
        width: 1200px;
        height: 410px;
        font-family: 'Space Grotesk', sans-serif;
        display: flex;
        flex-direction: column;
        background-color: rgba(0,0,0,0.9);
        position: absolute;
        top: 75px;
        right: 100px;
        padding: 30px;
        display: none;
       
`

export const BlogConteiner = styled.div`
        display: flex;
        gap: 25px;
        width: 100%;
        justify-content: space-around;
        padding: 0px 5px 30px 5px;
        margin-bottom: 15px;

        .nameBlogConteiner{
            display: flex;
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;

            a{
                color: white;
            }
        }
       

          


`

export const LinkforBlog = styled.a`
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