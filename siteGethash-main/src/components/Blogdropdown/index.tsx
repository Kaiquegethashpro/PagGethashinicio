import *  as Styled from "./style";
import React from "react";
import Carrousel from "./Carrousel";


export default function Blogdropdown() {

   
    return(
        <>
        
        <Styled.DropblogConteiner >
            <Styled.BlogConteiner>
               <Carrousel/>
            </Styled.BlogConteiner>
            
            <Styled.LinkforBlog href="#">Acesse nosso Blog</Styled.LinkforBlog>
        </Styled.DropblogConteiner>
        </>
    )
}