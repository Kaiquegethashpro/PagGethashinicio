import *  as Styled from "./style";

import React from "react";

export default function Servicesdropdown() {

   
    return(
        <>
        
        <Styled.DropservicesConteiner  >
            <Styled.ServicesConteiner>
                <div>
                    <img src="/assets/imgCases/cases.svg" alt="" />
                </div>
                
                <div className="nameCasesConteiner">
                    <a href="">Outsourcing</a>
                    <a href="">Consultoria em TI</a>
                    <a href="">Desenvolvimento Web</a>
                    <a href="">Desing UX/UI</a>
                    <a href="">Mídia Social</a>
                </div>

                <div className="nameCasesConteiner">
                    <a href="">Financeiro</a>
                    <a href="">Farmácia</a>
                    <a href="">Pagamentos</a>
                    <a href="">Saúde</a>
                    <a href="">Seguros</a>
                </div>

                <div className="nameCasesConteiner">
                    <a href="">Automotivo</a>
                    <a href="">Alimentação</a>
                    <a href="">Varejo</a>
                    <a href="">Mobilidade Urbana</a>
                    
                </div>
                

            </Styled.ServicesConteiner>
            
            <Styled.LinkforServices href="#">Serviços</Styled.LinkforServices>
        </Styled.DropservicesConteiner>
        </>
    )
}