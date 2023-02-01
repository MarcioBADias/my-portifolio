import React from "react";

import * as C from './style';

const Resume = () => {
    return (
        <C.Wrapper>
            <C.Container>
                <C.TopLine>Marcio Dias</C.TopLine>
                <C.Title>Desenvolvedor<C.MultiText>Front-End</C.MultiText></C.Title>
                <C.Text>Apaixonado por desafios e sempre em busca de oportunidades de aprender, sou um profissional de personalidade dinâmica que se permite ser flexivel em situações mudadas e lido muito bem com pressão. Além disso sou paciente e compreensivo, o que me ajuda a trabalhar bem com pessoas de diferentes backgrounds e níveis de habilidades. Acima de tudo, sou um individuo de fácil aprendizado e sempre estou disposto a adquirir novos conhecimentos e habilidades.</C.Text>
                <C.Container>
                    <C.Button>Curriculo pdf</C.Button>
                </C.Container>
            </C.Container>
        </C.Wrapper>
    );
};

export default Resume;