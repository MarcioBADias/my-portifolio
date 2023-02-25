import styled from 'styled-components';

export const Section = styled.div`
    align-items: center;
    background-color: var(--cor-primary);
    color: #000;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media (max-width: 840px){
        flex-direction: column;
    }
`;

export const Title = styled.h1`
    font-weight: bold;
    justify-content: space-around;
    margin: 1rem 0;
    text-align: center;
    width: 100vw;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 40vw;

    @media (max-width: 840px){
        width: 100%;
    }
`;

export const SubTitle = styled.h2`
    font-weight: bold;
    text-align: center;
    width: 100%;
`;

export const SoftSkills = styled.img`
    margin-left: -3rem;
    width: 100%;
`;

export const Img = styled.img`
    width: 100%;
`;