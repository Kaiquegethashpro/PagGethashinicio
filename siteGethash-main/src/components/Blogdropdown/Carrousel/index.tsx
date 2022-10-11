import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import *  as Styled from "./styles";

export default function Carrousel (){

     
        return (
            <Styled.CarrouselConteiner>
                <h4>Ultimos Posts</h4>
            <Carousel>
                
                <Styled.Childrencarrousel>
                    <img src="assets/russia.svg" />
                </Styled.Childrencarrousel>
                <Styled.Childrencarrousel>
                    <img src="assets/japao.svg" />
                </Styled.Childrencarrousel>
                <Styled.Childrencarrousel>
                    <img src="assets/portugal.svg" />
                </Styled.Childrencarrousel>
                <Styled.Childrencarrousel>
                    <img src="assets/irlanda.svg" />
                </Styled.Childrencarrousel>
                <Styled.Childrencarrousel>
                    <img src="assets/en.svg" />
                </Styled.Childrencarrousel>
                <Styled.Childrencarrousel>
                    <img src="assets/es.svg" />
                </Styled.Childrencarrousel>
                <Styled.Childrencarrousel>
                    <img src="assets/fr.svg" />
                </Styled.Childrencarrousel>
                <Styled.Childrencarrousel>
                    <img src="assets/arabe.svg" />
                </Styled.Childrencarrousel>
                <Styled.Childrencarrousel>
                    <img src="assets/china.svg" />
                </Styled.Childrencarrousel>
                <Styled.Childrencarrousel>
                    <img src="assets/china.svg" />
                </Styled.Childrencarrousel>
                <Styled.Childrencarrousel>
                    <img src="assets/china.svg" />
                </Styled.Childrencarrousel>
              
                <Styled.Childrencarrousel>                   
                    <img src="assets/fr.svg" />
                </Styled.Childrencarrousel>

                <Styled.Childrencarrousel>
                    <img src="assets/fr.svg" />
                </Styled.Childrencarrousel>
            </Carousel>
            </Styled.CarrouselConteiner>
        );
    }
;