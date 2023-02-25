import React from "react";

import * as C from './style';

const Resume = () => {
    return(
        <C.Wrapper>
            <C.Container>
                <C.TopLine>Marcio Dias</C.TopLine>
                <C.Title>
                    Desenvolvedor
                    <C.MultiText>Front-end</C.MultiText>
                </C.Title>
                <C.Text>
                    Apaixonado por desafios e sempre em busca de novas oportunidades. Sou um profissional dinâmico e flexível, com facilidade para lidar com situações de mudança e pressão. Minha paciência e empatia facilitam meu trabalho em grupo, principalmente no trato com pessoas de  diferentes níveis de habilidade e backgrounds. Além disso, sou um indivíduo com facilidade de aprendizado; sempre disposto a adquirir novos conhecimentos e ampliar minhas habilidades.
                </C.Text>
                <C.Button>Curriculo Pdf</C.Button>
            </C.Container>
            <C.Img src="#" alt='Foto de perfil'/>
        </C.Wrapper>
    )
}

export default Resume;