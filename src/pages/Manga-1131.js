import React from 'react';
import { Div, Img } from '../styles';
import cap01 from './../assets/1131/1131 - 1.png'
import cap02 from './../assets/1131/1131 - 2.png'
import cap03 from './../assets/1131/1131 - 3.png'
import cap04 from './../assets/1131/1131 - 4.png'
import cap05 from './../assets/1131/1131 - 5.png'
import cap06 from './../assets/1131/1131 - 6.jpg'
import cap07 from './../assets/1131/1131 - 7.jpg'
import cap08 from './../assets/1131/1131 - 8.png'
import cap09 from './../assets/1131/1131 - 9.png'
import cap10 from './../assets/1131/1131 - 10.png'
import cap11 from './../assets/1131/1131 - 11.png'
import cap12 from './../assets/1131/1131 - 12.jpg'
import cap13 from './../assets/1131/1131 - 13.png'
import cap14 from './../assets/1131/1131 - 14.png'



import { Link } from 'react-router-dom';
import { Li, DivNext, LinkNext, DivImgLuffy, ImgLuffy} from '../styles';
import onePiece from './../assets/onepiece-logo.jpg'
// import Manga1116 from './Manga-1116';
import Manga1130 from './Manga-1130';

function Manga1131() {
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
                <Li><LinkNext to="/Manga1130">Voltar</LinkNext></Li>
                {/* <Li><LinkNext to="/Manga1117">Próximo</LinkNext></Li> */}
            </DivNext>
      </div>

    </Div>
  );
}

export default Manga1131;