import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #313131;
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Container = styled.div``;

export const Img = styled.img`
  width: 80px;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  height: auto;

  @media (max-width: 840px) {
    display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: #313131;
    padding: 10px 0;
  }
`;

export const MenuItem = styled.li`
  margin: 0 1rem;
`;

export const Link = styled.a`
  color: #ffc504;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: capitalize;

  :hover {
    color: #fff;
    font-size: 1.2rem;
  }

  svg {
    height: 20px;
    margin-top: 15px;
    width: 20px;
  }
`;

export const MenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25;
`;