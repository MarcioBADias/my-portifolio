import styled from 'styled-components';

export const Section = styled.div`
    align-items: center;
    color: #000;
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    justify-content: space-around;

    @media (max-width: 840px){
        flex-direction: column;
    }
`;

export const TextArea = styled.div`
    display: block;
    margin: 0 2rem;
    margin-top: -15rem;
    width: 30vw;

    @media (max-width: 840px){
        flex-direction: column;
        width: 100%;
    }
`;

export const Title = styled.h1`
    color: var(--cor-primary);
    font-size:2rem;
    font-weight: bold;
    margin: 1rem 0;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
`;

export const Text = styled.p`
    color: var(--cor-primary);
    font-weight: bold;
    width: 100%;
`;

export const ProjectArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 60vw;

    @media (max-width: 840px){
        flex-direction: column;
        width: 100%;
    }
`;

export const Img = styled.img`
    margin: 1rem;
    width: 40%;
`;