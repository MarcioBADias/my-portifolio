import styled from "styled-components";

export const Nav = styled.nav`
    background-color: #313131;
    display: flex;
    height: 80px;
    justify-content: space-around;
    line-height: 80px;
    width: 100%;
    z-index: 111;
`

export const Container = styled.div``;

export const Title = styled.h2`
    color: #efc94c;
    //scursor: pointer;
    display: flex;
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 3px;
    text-transform: uppercase;
`;

export const Menu = styled.ul`
    display: flex;
`;

export const MenuItem = styled.li`
    list-style: none;
    margin: 0 15px;
`;

export const Link = styled.a`
    color: #ffc504;
    cursor: pointer;
    font-size: 1rem;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: capitalize;

    :hover{
        color: #fff;
        font-size: 1.2rem;
    }

    svg{
        height: 20px;
        margin-top: 15px;
        width: 20px;
    }
`;