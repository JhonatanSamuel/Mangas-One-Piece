import React from 'react';
import { Div, Img } from '../styles';
import cap01 from './../assets/1124/1124 - 1.jpg'
import cap02 from './../assets/1124/1124 - 2.jpg'
import cap03 from './../assets/1124/1124 - 3.jpg'
import cap04 from './../assets/1124/1124 - 4.jpg'
import cap05 from './../assets/1124/1124 - 5.jpg'
import cap06 from './../assets/1124/1124 - 6.jpg'
import cap07 from './../assets/1124/1124 - 7.jpg'
import cap08 from './../assets/1124/1124 - 8.jpg'
import cap09 from './../assets/1124/1124 - 9.jpg'
import cap10 from './../assets/1124/1124 - 10.jpg'
import cap11 from './../assets/1124/1124 - 11.jpg'

import { Link } from 'react-router-dom';
import { Li, DivNext, LinkNext, DivImgLuffy, ImgLuffy} from '../styles';
import onePiece from './../assets/onepiece-logo.jpg'
import Manga1125 from './Manga-1125';
import Manga1123 from './Manga-1123';

function Manga1124() {
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
                <Li><LinkNext to="/Manga1123">Voltar</LinkNext></Li>
                <Li><LinkNext to="/Manga1125">Próximo</LinkNext></Li>
            </DivNext>
      </div>

    </Div>
  );
}

export default Manga1124;