import *  as Styled from "./style";
import React from "react";
export default function Casesdropdown() {

   
    return(
        <>
        
        <Styled.DropcasesConteiner  >
            <Styled.CasesConteiner>
                <div>
                    <img src="/assets/imgCases/cases.svg" alt="" />
                </div>
                
                <div className="nameCasesConteiner">
                    <a href="">Cap Financeira</a>
                    <a href="">Campanha Animal</a>
                    <a href="">Testotera Barbearia</a>
                    <a href="">Holofot</a>
                </div>

                <div className="nameCasesConteiner">
                    <a href="">beNFTs</a>
                    <a href="">Teleprompter</a>
                    <a href="">Pat Traffic</a>
                    <a href="">CashPlin</a>
                </div>
                <Styled.Clients>
                    <h3>Clientes</h3>
                    <div className="imgCasesConteiner">
                        <img src="/assets/imgCases/cases.svg" alt="" />
                        <img src="/assets/imgCases/cases.svg" alt="" />
                        <img src="/assets/imgCases/cases.svg" alt="" />
                    </div>
                    <div className="imgCasesConteiner">
                        <img src="/assets/imgCases/cases.svg" alt="" />
                        <img src="/assets/imgCases/cases.svg" alt="" />
                        <img src="/assets/imgCases/cases.svg" alt="" />
                    </div>
                 
                   
                </Styled.Clients>

            </Styled.CasesConteiner>
            
            <Styled.LinkforCases href="#">Cases</Styled.LinkforCases>
        </Styled.DropcasesConteiner>
        </>
    )
}