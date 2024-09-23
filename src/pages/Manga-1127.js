import React from 'react';
import { Div, Img } from '../styles';
import cap01 from './../assets/1127/1127 - 1-.jpeg'
import cap02 from './../assets/1127/1127 - 2-.jpeg'
import cap03 from './../assets/1127/1127 - 3-.jpeg'
import cap04 from './../assets/1127/1127 - 4-.jpeg'
import cap05 from './../assets/1127/1127 - 5-.jpeg'
import cap06 from './../assets/1127/1127 - 6-.jpeg'
import cap07 from './../assets/1127/1127 - 7-.jpeg'
import cap08 from './../assets/1127/1127 - 8-.jpeg'
import cap09 from './../assets/1127/1127 - 9-.jpeg'
import cap10 from './../assets/1127/1127 - 10-.jpeg'
import cap11 from './../assets/1127/1127 - 11-.jpeg'
import cap12 from './../assets/1127/1127 - 12-.jpeg'
import cap13 from './../assets/1127/1127 - 13-.jpeg'


import { Link } from 'react-router-dom';
import { Li, DivNext, LinkNext, DivImgLuffy, ImgLuffy} from '../styles';
import onePiece from './../assets/onepiece-logo.jpg'
// import Manga1116 from './Manga-1116';
import Manga1126 from './Manga-1125';

function Manga1127() {
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
                <Li><LinkNext to="/Manga1126">Voltar</LinkNext></Li>
                {/* <Li><LinkNext to="/Manga1117">Próximo</LinkNext></Li> */}
            </DivNext>
      </div>

    </Div>
  );
}

export default Manga1127;