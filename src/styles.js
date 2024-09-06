import styled from 'styled-components'
import { Link } from 'react-router-dom';



export const DivImgLuffy = styled.div `
    position: relative;
    color: white;
    text-align: center;
    margin-top: 90px;
`

export const ImgLuffy = styled.img `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.2; 
    z-index: -1; 

    @media (max-width: 480px) {
        z-index: -100;
        opacity: 0.3; 
    }

`

export const Ul = styled.ul `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
    list-style: none;
    font-size: 35px;
    padding: 60px;
    
`

export const Div = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;

`

export const Img = styled.img `
    height: 60rem;
    border-radius: 10px;
    border: 1px solid #000000;

    @media (max-width: 480px) {
        height: auto;
        width: 100%;
    }

`

export const H3 = styled.h3 `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    margin-top: 50px;
    color: 	rgba(205,92,92);

    @media (max-width: 480px) {
        font-size: 25px;
    }
`

export const LiHome = styled.li `
    font-size: 45px;
    list-style: none;

    
`

export const Nav = styled.nav `
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 70px;
    width: 100%;
    background-color: rgba(192,192,192, 0.7);
    padding: 0 20px;
    position: fixed;


`

export const LinkS = styled(Link)  `
    text-decoration: none;
    color: 	rgba(205,92,92);
    font-weight: bold;

    Link:visited {
        color: #fff;
    }
    
`

export const StyledLink = styled(Link)  `
    text-decoration: none;
    font-size: 40px;
    color: 	rgba(28,28,28);
    font-weight: bold;

    
   

    @media (max-width: 480px) {
        font-size: 30px;
    }

`

export const StyledManga = styled(Link)  `
    text-decoration: none;
    margin-bottom: 40px;
    font-size: 60px;
    color: #fff;
    background-color: rgba(30,144,255, 0.5);
    padding: 17px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5); /* Propriedade de sombra */
    transition: box-shadow 0.1s ease; /* Para suavizar a transição da sombra */


    &:hover {
    background-color: rgba(135,206,250, 0.7);
    }

    &:active {
        opacity: 0.7;
    }
`

export const Li = styled.li `

    list-style: none;
    font-size: 30px;
    margin-top: 20px;


    &:hover {
    background-color: rgba(135,206,250, 0.2);
  }

  &:active {
    opacity: 0.7;
  }
`

export const DivNext = styled.ul `
    display: flex;
    gap: 20rem;
    margin-top: 20px;
    
    @media (max-width: 480px) {
    display: flex;
    gap: 190px;
    
    
  }

`

export const LinkNext = styled(Link)  `
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    padding: 12px;
    background-color: rgba(30,144,255, 0.8);
    border-radius: 15px;
    margin-top: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.8); /* Propriedade de sombra */
    transition: box-shadow 0.3s ease; /* Para suavizar a transição da sombra */

    &:hover {
    background-color: rgba(135,206,250, 0.7);
  }

  &:active {
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    padding: 15px;
    font-size: 20px;
  }
`

export const P = styled.p `
    font-size: 22px;
    display: inline-block;
    color: rgba(0, 0, 0, 0.4);

`

export const CapNovo = styled.p `
    font-size: 22px;
    display: inline-block;
    color:  rgba(28,28,28);
    background-color: 	rgba(205,92,92);
    border-radius: 10px;
    padding: 5px;
`



