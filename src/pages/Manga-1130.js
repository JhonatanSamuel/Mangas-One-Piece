import React from 'react';
import { Div, Img } from '../styles';
import cap01 from './../assets/1130/1130 - 1.jpeg'
import cap02 from './../assets/1130/1130 - 2.jpeg'
import cap03 from './../assets/1130/1130 - 3.jpeg'
import cap04 from './../assets/1130/1130 - 4.jpeg'
import cap05 from './../assets/1130/1130 - 5.jpeg'
import cap06 from './../assets/1130/1130 - 6.jpeg'
import cap07 from './../assets/1130/1130 - 7.jpeg'
import cap08 from './../assets/1130/1130 - 8.jpeg'
import cap09 from './../assets/1130/1130 - 9.jpeg'
import cap10 from './../assets/1130/1130 - 10.jpeg'
import cap11 from './../assets/1130/1130 - 11.jpeg'
import cap12 from './../assets/1130/1130 - 12.jpeg'
import cap13 from './../assets/1130/1130 - 13.jpeg'



import { Link } from 'react-router-dom';
import { Li, DivNext, LinkNext, DivImgLuffy, ImgLuffy} from '../styles';
import onePiece from './../assets/onepiece-logo.jpg'
// import Manga1116 from './Manga-1116';
import Manga1129 from './Manga-1129';

function Manga1130() {
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


      <div>
            <DivNext>
                <Li><LinkNext to="/Manga1129">Voltar</LinkNext></Li>
                {/* <Li><LinkNext to="/Manga1117">Próximo</LinkNext></Li> */}
            </DivNext>
      </div>

    </Div>
  );
}

export default Manga1130;