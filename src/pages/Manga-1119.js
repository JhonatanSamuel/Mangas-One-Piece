import React from 'react';
import { Div, Img } from '../styles';
import cap01 from './../assets/1119/1119 - 1.jpg'
import cap02 from './../assets/1119/1119 - 2.jpg'
import cap03 from './../assets/1119/1119 - 3.jpg'
import cap04 from './../assets/1119/1119 - 4.jpg'
import cap05 from './../assets/1119/1119 - 5.jpg'
import cap06 from './../assets/1119/1119 - 6.jpg'
import cap07 from './../assets/1119/1119 - 7.jpg'
import cap08 from './../assets/1119/1119 - 8.jpg'
import cap09 from './../assets/1119/1119 - 9.jpg'
import cap10 from './../assets/1119/1119 - 10.jpg'
import cap11 from './../assets/1119/1119 - 11.jpg'

import { Link } from 'react-router-dom';
import onePiece from './../assets/onepiece-logo.jpg'
import Manga1120 from './Manga-1120';
import Manga1118 from './Manga-1118';
import { Li, DivNext, LinkNext, DivImgLuffy, ImgLuffy} from '../styles';

function Manga1119() {
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

        <div>
            <DivNext>
                <Li><LinkNext to="/Manga1118">Voltar</LinkNext></Li>
                <Li><LinkNext to="/Manga1120">Próximo</LinkNext></Li>
            </DivNext>
        </div>

    </Div>
  );
}

export default Manga1119;