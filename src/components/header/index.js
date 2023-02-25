import React, { useState } from "react";
import Logo from '../../assets/img/logo.svg';
import {
    AiFillGithub,
    AiFillLinkedin
} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri"
import * as C from './style'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <C.Nav>
            <C.Container>
                <C.Img src={Logo} alt='Logo Marcius Code' />
            </C.Container>

            <C.Menu showMenu={showMenu}>
                <C.MenuItem><C.Link>Inicio</C.Link></C.MenuItem>
                <C.MenuItem><C.Link>Sobre</C.Link></C.MenuItem>
                <C.MenuItem><C.Link>Habilidades</C.Link></C.MenuItem>
                <C.MenuItem><C.Link>Projetos</C.Link></C.MenuItem>
                <C.MenuItem><C.Link>Contatos</C.Link></C.MenuItem>
            </C.Menu>

            <C.Container>
                <AiFillGithub/>
                <AiFillLinkedin/>
                <RiWhatsappFill/>
            </C.Container>
            
            <C.MenuButton onClick={() => setShowMenu(!showMenu)}>
              <div />
              <div />
              <div />
            </C.MenuButton>
        </C.Nav>
    );
};

export default Header;