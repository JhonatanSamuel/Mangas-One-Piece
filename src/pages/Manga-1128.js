import React from 'react';
import { Div, Img } from '../styles';
import cap01 from './../assets/1128/1128 - 1.jpg'
import cap02 from './../assets/1128/1128 - 2.jpg'
import cap03 from './../assets/1128/1128 - 3.jpg'
import cap04 from './../assets/1128/1128 - 4.jpg'
import cap05 from './../assets/1128/1128 - 5.jpg'
import cap06 from './../assets/1128/1128 - 6.jpg'
import cap07 from './../assets/1128/1128 - 7.jpg'
import cap08 from './../assets/1128/1128 - 8.jpg'
import cap09 from './../assets/1128/1128 - 9.jpg'
import cap10 from './../assets/1128/1128 - 10.jpg'
import cap11 from './../assets/1128/1128 - 11.jpg'
import cap12 from './../assets/1128/1128 - 12.jpg'
import cap13 from './../assets/1128/1128 - 13.jpg'
import cap14 from './../assets/1128/1128 - 14.jpg'
import cap15 from './../assets/1128/1128 - 15.jpg'
import cap16 from './../assets/1128/1128 - 16.jpg'


import { Link } from 'react-router-dom';
import { Li, DivNext, LinkNext, DivImgLuffy, ImgLuffy} from '../styles';
import onePiece from './../assets/onepiece-logo.jpg'
import Manga1127 from './Manga-1127';
import Manga1129 from './Manga-1129';

function Manga1128() {
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

      <div>
            <DivNext>
                <Li><LinkNext to="/Manga1127">Voltar</LinkNext></Li>
                <Li><LinkNext to="/Manga1129">Próximo</LinkNext></Li>
            </DivNext>
      </div>

    </Div>
  );
}

export default Manga1128;