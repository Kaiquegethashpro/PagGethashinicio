import *  as Styled from "./style";
import {FiChevronDown} from 'react-icons/fi'
import React from "react";
import Casesdropdown from "../Casesdropwn";
import Servicesdropdown from "../Servicesdropdown";
import Productsdropdown from "../Productsdropdown";
import Blogdropdown from "../Blogdropdown";
import Logindropdown from "../Logindropdown";


export default function Header() {

    const [teste, setTeste] = React.useState(false)
    
    return(
        <>
        <Styled.Header>
        
           <Styled.Navegation>
            <div>
                <a href="">
                <img src="/assets/logo.svg" alt="" />
                </a>
            </div>
            <p className="aboutUs">Sobre Nós</p>
            <a className="arrowDonw">
                <p>Blog</p>
                <FiChevronDown/>
            </a>
            <a className="arrowDonw">
                <p>Produtos</p>
                <FiChevronDown/>
            </a>
            <a className="arrowDonw">
                <p>Serviços</p>
                <FiChevronDown/>
            </a>
            <a className="portfolio">
                <p>Portifólio</p>
                
            </a>
            <div className="arrowDonw">
                <p>Cases</p>
                <FiChevronDown/>
                <Casesdropdown />
            </div>
            <a className="portfolio">
                <p>Contato</p>
                
            </a>

            <div className="flagConteiner">
                <img src="/assets/brasil.png" alt="" />
                <FiChevronDown onClick={() => setTeste(!teste)}/>
                <Styled.Dropdownflags bandeiras={teste}>
            <div className="flagConteinerChildren">
                <li>
                <img src="/assets/en.svg" alt="" />
                <p>English</p>
                </li>

                <li>
                <img src="/assets/fr.svg" alt="" />
                <p>Français</p>
                </li>

                <li>
                <img src="/assets/es.svg" alt="" />
                <p>Espanõl</p>
                </li>

                <li>
                <img src="/assets/portugal.svg" alt="" />
                <p>Português</p>
                </li>

                <li>
                <img src="/assets/china.svg" alt="" />
                <p>中國人</p>
                </li>
            </div>

            <div className="flagConteinerChildren">
            <li>
            <img src="/assets/irlanda.svg" alt="" />
            <p>Éireann</p>
            </li>

            <li>
            <img src="/assets/japao.svg" alt="" />
            <p>日本</p>
            </li>

            <li>
            <img src="/assets/arabe.svg" alt="" />
            <p>తెలుగు</p>
            </li>

            <li>
            <img src="/assets/alemanha.svg" alt="" />
            <p>Deutsch</p>
            </li>
            </div>
                </Styled.Dropdownflags>
            </div>
            
            <a href="">
                <img src="/assets/cart.svg" alt="" className="carrinhoImg" />
            </a>

            <a href="" className="buttonConteiner">
                <button>Login</button>
                <Logindropdown/>
            </a>
           </Styled.Navegation>
        </Styled.Header>
        <Servicesdropdown/>
        <Productsdropdown/>
        <Blogdropdown/>
        
        </>
    )
}