import * as Styled from './style'




export default function Logindropdown () {

    return(
        <Styled.LogindropConteiner>

            <Styled.TriangleConteiner>
                <div className='Triangulogethash'></div>
                <div className='Triangulogethash2'></div>
            </Styled.TriangleConteiner>

            <Styled.LoginAreaConteiner>
                 <a href="#">Colaborador</a>
                 <a href="#">Cliente</a>
                 <a href="#">Candidato</a>
                <div></div>
                <a href="#">Administrador</a>

            </Styled.LoginAreaConteiner>
                

        </Styled.LogindropConteiner>
    )
}