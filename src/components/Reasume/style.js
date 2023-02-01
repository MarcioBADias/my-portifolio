import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    padding: 0 10%;
    overflow: hidden;

    ::before{
        position: absolute;
        content: '';
        height: 600px;
        width: 600px;
        border-radius: 50%;
        left: -12%;
        top:40%;
        background: linear-gradient(45deg, #000, #efc94c);
        animation: object1 6s linear infinite;
        z-index: 5;
        }

        ::after{
        position: absolute;
        content: '';
        height: 100px;
        width: 100px;
        border-radius: 50%;
        left: 45%;
        top:20%;
        background: linear-gradient(45deg, #000, #efc94c);
        animation: object2 6s linear infinite;
        }

        @keyframes object1{
            50%{
                left: -13%;
                top: 41%;
            }
        }

        @keyframes object2{
            50%{
                left: 43%;
                top: 18%;
            }
        }
`;

export const Container = styled.div`
    width: 50%;
    z-index: 5;
`;

export const TopLine = styled.span`
    color:#efc94c;
    display: block;
    position: relative;
    font-size: 2rem;
    letter-spacing: 5px;

    /* ::after{
        position: absolute;
        content: '';
        height: 4px;
        width: 45px;
        bottom: 10px;
        background: #efc94c;
    } */
`;

export const Title = styled.h1`
    display: block;
    font-size: 2rem;

`;

export const MultiText = styled.span`
    color: #efc94c;
    margin-left: .5rem;
    text-transform: capitalize;
`;

export const Text = styled.p`
    display: block;
    margin-top: .5rem;
    width: 90%;
    font-size: 1rem;

`;

export const Button = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1rem 2rem;
    margin: 2rem .5rem;
    text-transform: capitalize;
    box-shadow: 0 10px 10px #efc94c;

    :hover{
        background-color: #efc94c;
        color: #fff;
    }
`;