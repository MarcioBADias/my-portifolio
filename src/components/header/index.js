import React from "react";
import Logo from '../../assets/img/logo.svg';
// import {
//     AiFillGithub,
//     AiFillLinkedin
// } from "react-icons/ai";

// import { RiWhatsappFill } from "react-icons/ri"

import * as C from './style'

const Header = () => {
    return (
        <C.Nav>
            <C.Container>
                <C.Img src={Logo} alt='Logo Marcius Code' />
            </C.Container>
            <C.Menu>
                <C.MenuItem><C.Link>Inicio</C.Link></C.MenuItem>
                <C.MenuItem><C.Link>Sobre</C.Link></C.MenuItem>
                <C.MenuItem><C.Link>Habilidades</C.Link></C.MenuItem>
                <C.MenuItem><C.Link>Projetos</C.Link></C.MenuItem>
                <C.MenuItem><C.Link>Contatos</C.Link></C.MenuItem>
            </C.Menu>
            {/* <C.Container>
                <C.Link><AiFillGithub color='#ffc504' /></C.Link>
                <C.Link><AiFillLinkedin color='#ffc504' /></C.Link>
                <C.Link><RiWhatsappFill color='#ffc504' /></C.Link>
            </C.Container> */}
        </C.Nav>
    );
};

export default Header;