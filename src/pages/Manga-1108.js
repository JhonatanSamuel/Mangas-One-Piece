import React from 'react';
import { Div, Img } from '../styles';
import cap01 from './../assets/1108/1108 - 1.jpg'
import cap02 from './../assets/1108/1108 - 2.jpg'
import cap03 from './../assets/1108/1108 - 3.jpg'
import cap04 from './../assets/1108/1108 - 4.jpg'
import cap05 from './../assets/1108/1108 - 5.jpg'
import cap06 from './../assets/1108/1108 - 6.jpg'
import cap07 from './../assets/1108/1108 - 7.jpg'
import cap08 from './../assets/1108/1108 - 8.jpg'
import cap09 from './../assets/1108/1108 - 9.jpg'
import cap10 from './../assets/1108/1108 - 10.jpg'
import cap11 from './../assets/1108/1108 - 11.jpg'
import cap12 from './../assets/1108/1108 - 12.jpg'
import cap13 from './../assets/1108/1108 - 13.jpg'
import cap14 from './../assets/1108/1108 - 14.jpg'

import { Link } from 'react-router-dom';
import { Li, LinkNext, DivImgLuffy, ImgLuffy, DivNext} from '../styles';
import Manga1109 from './Manga-1109';
import onePiece from './../assets/onepiece-logo.jpg'



function Manga1108() {
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

      <div>
        <DivNext>
            <Li><LinkNext to="/Manga1109">Próximo</LinkNext></Li>
        </DivNext>
      </div>
        

      

    </Div>

  );
}

export default Manga1108;