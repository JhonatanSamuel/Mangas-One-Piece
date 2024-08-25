import React from 'react';
import { Link } from 'react-router-dom';
import capaLuffy from './../assets/onepiece-logo.jpg'

import { ImgLuffy, Li, H3, DivImgLuffy, Ul, StyledLink,} from '../styles';

function Mangas() {
  return (

    <>
        
        <DivImgLuffy>
            <ImgLuffy src={capaLuffy}></ImgLuffy>
        </DivImgLuffy>

        <H3> Capítulos do 1108 em diante.  </H3>

        <Ul>
            <Li><StyledLink to="/Manga1108">Mangá cap. 1108</StyledLink></Li>
            <Li><StyledLink to="/Manga1109">Mangá cap. 1109</StyledLink></Li>
            <Li><StyledLink to="/Manga1110">Mangá cap. 1110</StyledLink></Li>
            <Li><StyledLink to="/Manga1111">Mangá cap. 1111</StyledLink></Li>
            <Li><StyledLink to="/Manga1112">Mangá cap. 1112</StyledLink></Li>
            <Li><StyledLink to="/Manga1113">Mangá cap. 1113</StyledLink></Li>
            <Li><StyledLink to="/Manga1114">Mangá cap. 1114</StyledLink></Li>
            <Li><StyledLink to="/Manga1115">Mangá cap. 1115</StyledLink></Li>
            <Li><StyledLink to="/Manga1116">Mangá cap. 1116</StyledLink></Li>
            <Li><StyledLink to="/Manga1117">Mangá cap. 1117</StyledLink></Li>
            <Li><StyledLink to="/Manga1118">Mangá cap. 1118</StyledLink></Li>
            <Li><StyledLink to="/Manga1119">Mangá cap. 1119</StyledLink></Li>
            <Li><StyledLink to="/Manga1120">Mangá cap. 1120</StyledLink></Li>
            <Li><StyledLink to="/Manga1121">Mangá cap. 1121</StyledLink></Li>
            <Li><StyledLink to="/Manga1122">Mangá cap. 1122</StyledLink></Li>
            <Li><StyledLink to="/Manga1123">Mangá cap. 1123</StyledLink></Li>
            <Li><StyledLink to="/Manga1124">Mangá cap. 1124</StyledLink></Li>
        </Ul>

    </>    
  )
}

export default Mangas;