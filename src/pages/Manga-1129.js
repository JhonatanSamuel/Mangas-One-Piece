import React from 'react';
import { Div, Img } from '../styles';
import cap01 from './../assets/1129/1129 - 1.jpg'
import cap02 from './../assets/1129/1129 - 2.jpg'
import cap03 from './../assets/1129/1129 - 3.jpg'
import cap04 from './../assets/1129/1129 - 4.jpg'
import cap05 from './../assets/1129/1129 - 5.jpg'
import cap06 from './../assets/1129/1129 - 6.jpg'
import cap07 from './../assets/1129/1129 - 7.jpg'
import cap08 from './../assets/1129/1129 - 8.jpg'
import cap09 from './../assets/1129/1129 - 9.jpg'
import cap10 from './../assets/1129/1129 - 10.jpg'
import cap11 from './../assets/1129/1129 - 11.jpg'
import cap12 from './../assets/1129/1129 - 12.jpg'
import cap13 from './../assets/1129/1129 - 13.jpg'
import cap14 from './../assets/1129/1129 - 14.jpg'
import cap15 from './../assets/1129/1129 - 15.jpg'


import { Link } from 'react-router-dom';
import { Li, DivNext, LinkNext, DivImgLuffy, ImgLuffy} from '../styles';
import onePiece from './../assets/onepiece-logo.jpg'
import Manga1130 from './Manga-1127';
import Manga1128 from './Manga-1128';

function Manga1129() {
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

      <div>
            <DivNext>
                <Li><LinkNext to="/Manga1128">Voltar</LinkNext></Li>
                <Li><LinkNext to="/Manga1130">Próximo</LinkNext></Li>
            </DivNext>
      </div>

    </Div>
  );
}

export default Manga1129;