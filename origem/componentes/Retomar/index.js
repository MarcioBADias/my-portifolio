import react from "react";
import ProfileArt from '../../assets/img/profile-image.svg';
import * as C from './style';
import SelfWritten from "../self-written";

const Resume = () => {
    return (
        <C.Wrapper>
            <C.Container>
                <C.TopLine>Marcio Dias</C.TopLine>
                <C.Title>Desenvolvedor<C.MultiText><SelfWritten /></C.MultiText></C.Title>
                <C.Text>Apaixonado por desafios e sempre em busca de novas oportunidades. Sou um profissional dinâmico e flexível, com facilidade para lidar com situações de mudança e pressão. Minha paciência e empatia facilitam meu trabalho em grupo, principalmente no trato com pessoas de  diferentes níveis de habilidade e backgrounds. Além disso, sou um indivíduo com facilidade de aprendizado, sempre disposto a adquirir novos conhecimentos e ampliar minhas habilidades.</C.Text>
                <C.Container>
                    <C.Button>Curriculo pdf</C.Button>
                </C.Container>
            </C.Container>
            <C.Container>
                <C.Img src={ProfileArt} alt='Imagem do Dev Marcio Dias' />
            </C.Container>
        </C.Wrapper>
    );
};

export default Resume;
