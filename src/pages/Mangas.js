import React from 'react';
import { Link } from 'react-router-dom';
import capaLuffy from './../assets/onepiece-logo.jpg'

import { ImgLuffy, Li, H3, DivImgLuffy, Ul, StyledLink, P} from '../styles';

let data = '24/08/2024';

function Mangas() {
  return (

    <>
        
        <DivImgLuffy>
            <ImgLuffy src={capaLuffy}></ImgLuffy>
        </DivImgLuffy>

        <H3> Capítulos do 1108 em diante.  </H3>

        <Ul>

            
            <Li><StyledLink to="/Manga1124">Capítulo 1124 - MELHOR AMIGO    <P>{data}</P></StyledLink></Li>
            <Li><StyledLink to="/Manga1123">Capítulo 1123 - A LACUNA DE DUAS SEMANAS    <P>{data}</P></StyledLink></Li>
            <Li><StyledLink to="/Manga1122">Capítulo 1122 - NO MOMENTO CERTO!    <P>{data}</P></StyledLink></Li>
            <Li><StyledLink to="/Manga1121">Capítulo 1121 - A PASSAGEM DO TEMPO    <P>{data}</P></StyledLink></Li>
            <Li><StyledLink to="/Manga1120">Capítulo 1120 - ATLAS    <P>{data}</P></StyledLink></Li>
            <Li><StyledLink to="/Manga1119">Capítulo 1119 - EMETH    <P>{data}</P></StyledLink></Li>
            <Li><StyledLink to="/Manga1118">Capítulo 1118 - SER LIVRE    <P>{data}</P></StyledLink></Li>
            <Li><StyledLink to="/Manga1117">Capítulo 1117 - TAMBÉM    <P>{data}</P></StyledLink></Li>
            <Li><StyledLink to="/Manga1116">Capítulo 1116 - CONFLITO    <P>{data}</P></StyledLink></Li>
            <Li><StyledLink to="/Manga1115">Capítulo 1115 - FRAGMENTOS CONTINENTAIS    <P>{data}</P></StyledLink></Li>
            <Li><StyledLink to="/Manga1114">Capítulo 1114 - AS ASAS DE ÍCARO    <P>{data}</P></StyledLink></Li>
            <Li><StyledLink to="/Manga1113">Capítulo 1113 - STALEMATE    <P>{data}</P></StyledLink></Li>
            <Li><StyledLink to="/Manga1112">Capítulo 1112 - ASPECTO ÁRDUO    <P>{data}</P></StyledLink></Li>
            <Li><StyledLink to="/Manga1111">Capítulo 1111 - ESCUDO DO SOL    <P>{data}</P></StyledLink></Li>
            <Li><StyledLink to="/Manga1110">Capítulo 1110 - QUEDA CELESTE    <P>{data}</P></StyledLink></Li>
            <Li><StyledLink to="/Manga1109">Capítulo 1109 - INTERCEPTAÇÃO    <P>{data}</P></StyledLink></Li>
            <Li><StyledLink to="/Manga1108">Capítulo 1108 - RESPONDA, MUNDO!    <P>{data}</P></StyledLink></Li>

        </Ul>

    </>    
  )
}

export default Mangas;