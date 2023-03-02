import React from "react";
import project1 from '../../assets/img/projects/proj-control-fin.svg'

import * as C from './style';

const Projects = () =>{
    return (
        <C.Section>
            <C.TextArea>
                <C.Title>PROJETOS</C.Title>
                <C.Text>
                    Selecione um dos projetos ao lado para ver um pouco do que tenho trabalhado para atender clientes particulares, projetos pessoais e desafios para cursos e processos.
                </C.Text>
            </C.TextArea>
            <C.ProjectArea>
                <C.Img src={project1} alt="Projeto:" />
                <C.Img src={project1} alt="Projeto:" />
                <C.Img src={project1} alt="Projeto:" />
                <C.Img src={project1} alt="Projeto:" />
            </C.ProjectArea>
        </C.Section>
    )
}

export default Projects;