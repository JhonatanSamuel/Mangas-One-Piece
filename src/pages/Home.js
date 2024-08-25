import React from 'react';
import { Link } from 'react-router-dom';
import onePiece from './../assets/onepiece-logo.jpg'
import Mangas from './Mangas';



import { ImgLuffy, Li, H3, DivImgLuffy, Ul, StyledManga } from '../styles';

function Home() {
  return (

    <>

        <DivImgLuffy>
            <ImgLuffy src={onePiece}></ImgLuffy>
        </DivImgLuffy>



        <Ul>
          <Li><StyledManga to="/Mangas">Mangás</StyledManga></Li>
        </Ul>
            

    </>    
  )
}

export default Home;