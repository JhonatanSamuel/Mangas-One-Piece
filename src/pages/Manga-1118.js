import React from 'react';
import { Div, Img } from '../styles';
import cap01 from './../assets/1118/1118 - 1.jpg'
import cap02 from './../assets/1118/1118 - 2.jpg'
import cap03 from './../assets/1118/1118 - 3.jpg'
import cap04 from './../assets/1118/1118 - 4.jpg'
import cap05 from './../assets/1118/1118 - 5.jpg'
import cap06 from './../assets/1118/1118 - 6.jpg'
import cap07 from './../assets/1118/1118 - 7.jpg'
import cap08 from './../assets/1118/1118 - 8.jpg'
import cap09 from './../assets/1118/1118 - 9.jpg'
import cap10 from './../assets/1118/1118 - 10.jpg'
import cap11 from './../assets/1118/1118 - 11.jpg'
import cap12 from './../assets/1118/1118 - 12.jpg'

import { Link } from 'react-router-dom';
import onePiece from './../assets/onepiece-logo.jpg'
import Manga1119 from './Manga-1119';
import Manga1117 from './Manga-1117';
import { Li, LinkNext, DivImgLuffy, ImgLuffy, DivNext} from '../styles';

function Manga1118() {
  return (
    <Div>

        <DivImgLuffy>
            <ImgLuffy src={onePiece}></ImgLuffy>
        </DivImgLuffy>


        <Img src={cap01}></Img>
        <Img src={cap02}></Img>
        <Img src={cap03}></Img>
        <Img src={cap04}></Img>
        <Img src={cap05}></Img>
        <Img src={cap06}></Img>
        <Img src={cap07}></Img>
        <Img src={cap08}></Img>
        <Img src={cap09}></Img>
        <Img src={cap10}></Img>
        <Img src={cap11}></Img>
        <Img src={cap12}></Img>

        <div>
            <DivNext>
                <Li><LinkNext to="/Manga1117">Voltar</LinkNext></Li>
                <Li><LinkNext to="/Manga1119">Próximo</LinkNext></Li>
            </DivNext>
        </div>

    </Div>
  );
}

export default Manga1118;