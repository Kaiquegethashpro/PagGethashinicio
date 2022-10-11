import styled from "styled-components";
import { theme } from "../../styles/globals";

export const Header = styled.header`
   font-family: 'Space Grotesk', sans-serif;
   background-color: #010101;
   width: 100vw;
   height: 75px;
   padding: 14px 84px;
   color: white;
   font-weight: bold;
   
   @media (min-width: 992px) and (max-width: 1200px) {
        padding: 14px 20px;
       
}
   
`
export const Navegation = styled.nav`

/**@media (min-width: 450px){
}
@media (min-width: 450px) and (max-width: 600px) {
  
}
@media (max-width: 600px) {
 
} */



//	sm	≥576px
//	md	≥768px
//  lg	≥992px
//	xl	≥1200px


    font-size: 16px;
    display:flex;
    justify-content: space-between;

    @media (min-width: 992px) and (max-width: 1200px) {
        font-size: 14px;
       
}
    .aboutUs{
        width: 50px;
       
    }

    .arrowDonw{
        display:flex;
        align-items: flex-end;
        gap: 10px;
    }

    .flagConteiner{
        display: flex;
        color: white;
        gap: 5px;
    }

    .carrinhoImg{
        height: 27px;
    }

    .buttonConteiner{

        button{
            
            background: linear-gradient(268.07deg,${theme.buttonColor.primary} 5.79%,${theme.buttonColor.second} 86.84%);
            max-width: 100%;
            min-width: 150px;
            height: 42px;
            font-size: 17px;
            text-align: center;
            border-radius: 4px;
            color: white;
            transition: 2.5s;

            :hover{
               
               background: linear-gradient(268.07deg,${theme.buttonColor.primary} 5.79%,${theme.buttonColor.primary} 86.84%);
               transition: 2.5s;
               
            }


        }
    }
`

export const Dropdownflags = styled.ul<{bandeiras:boolean}>`
    background-color: rgba(0,0,0,0.6);
    width: 300px;
    height: 236px;
    display: ${({bandeiras}) => bandeiras ? "flex" : "none"};
    position: absolute;
    top: 75px;
    right: 350px;    
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;

    .flagConteinerChildren{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
        
        li{
        width: 100% ;
        display: flex;
        gap: 10px;
    }
    }

   
    
`