import React from 'react'
import styled from "styled-components";
import HeroImg from "../../../images/Sukhendra.jpg";
import { Tilt } from "react-tilt";
import {motion} from 'framer-motion';
import {
    headContentAnimation,
  } from "../../../utils/motion";



const RightContainerDiv = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;


const Img = styled.img`
  border-radius: 5%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 6px solid #9f9f9f;

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const RightContainer = () => {
  return (
    <RightContainerDiv>
        <motion.div {...headContentAnimation}>
             <Tilt>
            <Img src={HeroImg} alt="Sukhendra Rajawat" />
        </Tilt>
        </motion.div>
       
        
    </RightContainerDiv>
  )
}

export default RightContainer
