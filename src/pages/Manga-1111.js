import React from 'react';
import { Div, Img } from '../styles';
import cap01 from './../assets/1111/1111 - 1.jpg'
import cap02 from './../assets/1111/1111 - 2.jpg'
import cap03 from './../assets/1111/1111 - 3.jpg'
import cap04 from './../assets/1111/1111 - 4.jpg'
import cap05 from './../assets/1111/1111 - 5.jpg'
import cap06 from './../assets/1111/1111 - 6.jpg'
import cap07 from './../assets/1111/1111 - 7.jpg'
import cap08 from './../assets/1111/1111 - 8.jpg'
import cap09 from './../assets/1111/1111 - 9.jpg'
import cap10 from './../assets/1111/1111 - 10.jpg'
import cap11 from './../assets/1111/1111 - 11.jpg'
import cap12 from './../assets/1111/1111 - 12.jpg'
import cap13 from './../assets/1111/1111 - 13.jpg'
import cap14 from './../assets/1111/1111 - 14.jpg'
import cap15 from './../assets/1111/1111 - 15.jpg'
import cap16 from './../assets/1111/1111 - 16.jpg'
import cap17 from './../assets/1111/1111 - 17.jpg'
import cap18 from './../assets/1111/1111 - 18.jpg'
import cap19 from './../assets/1111/1111 - 19.jpg'

import { Link } from 'react-router-dom';
import onePiece from './../assets/onepiece-logo.jpg'
import Manga1112 from './Manga-1112';
import Manga1110 from './Manga-1110';
import { Li, LinkNext, DivImgLuffy, ImgLuffy, DivNext} from '../styles';

function Manga1111() {
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
      <Img src={cap18}></Img>
      <Img src={cap19}></Img>

      <div>
        <DivNext>
            <Li><LinkNext to="/Manga1110">Voltar</LinkNext></Li>
            <Li><LinkNext to="/Manga1112">Próximo</LinkNext></Li>
        </DivNext>
      </div>

    </Div>
  );
}

export default Manga1111;