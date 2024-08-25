import React from 'react';
import { Div, Img } from '../styles';
import cap01 from './../assets/1110/1110 - 1.jpg'
import cap02 from './../assets/1110/1110 - 2.jpg'
import cap03 from './../assets/1110/1110 - 3.jpg'
import cap04 from './../assets/1110/1110 - 4.jpg'
import cap05 from './../assets/1110/1110 - 5.jpg'
import cap06 from './../assets/1110/1110 - 6.jpg'
import cap07 from './../assets/1110/1110 - 7.jpg'
import cap08 from './../assets/1110/1110 - 8.jpg'
import cap09 from './../assets/1110/1110 - 9.jpg'
import cap10 from './../assets/1110/1110 - 10.jpg'
import cap11 from './../assets/1110/1110 - 11.jpg'
import cap12 from './../assets/1110/1110 - 12.jpg'
import cap13 from './../assets/1110/1110 - 13.jpg'
import cap14 from './../assets/1110/1110 - 14.jpg'
import cap15 from './../assets/1110/1110 - 15.jpg'
import cap16 from './../assets/1110/1110 - 16.jpg'
import cap17 from './../assets/1110/1110 - 17.jpg'

import { Link } from 'react-router-dom';
import Manga1111 from './Manga-1111';
import Manga1109 from './Manga-1109';
import { Li, LinkNext, DivImgLuffy, ImgLuffy, DivNext} from '../styles';
import onePiece from './../assets/onepiece-logo.jpg'

function Manga1110() {
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
      <Img src={cap13}></Img>
      <Img src={cap14}></Img>
      <Img src={cap15}></Img>
      <Img src={cap16}></Img>
      <Img src={cap17}></Img>

      <div>
        <DivNext>
            <Li><LinkNext to="/Manga1109">Voltar</LinkNext></Li>
            <Li><LinkNext to="/Manga1111">Próximo</LinkNext></Li>
        </DivNext>
      </div>


    </Div>
  );
}

export default Manga1110;