import React from "react";
import styled from "styled-components";

import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";
import HeroBgAnimation from "../../HeroBgAnimation";
import { motion } from "framer-motion";
import { headContainerAnimation } from "../../../utils/motion";

const BannerSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const BannerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const BannerSection = () => {
  return (
    <BannerSectionWrapper id="About"> 
      <HeroBg>
        <HeroBgAnimation />
      </HeroBg>
      <motion.div {...headContainerAnimation}>
        <BannerContainer>
          <LeftContainer />
          <RightContainer />
        </BannerContainer>
      </motion.div>
    </BannerSectionWrapper>
  );
};

export default BannerSection;
