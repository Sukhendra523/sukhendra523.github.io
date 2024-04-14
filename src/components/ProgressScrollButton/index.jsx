import React, { useEffect } from "react";
import styled from "styled-components";

const ProgressScrollDiv = styled.div`
right: 25px; 
bottom: 25px;
color: white;
position: fixed;
right: 50px;
bottom: 50px; 
height: 46px;
width: 46px; 
cursor: pointer; 
border-radius: 50px; 
box-shadow: inset  0 0 0 2px white; 
z-index: 999; 
opacity: 0; 
visibility: hidden; 
transform: translateY(15px); 
-webkit-transition: all 200ms linear; 
transition: all 200ms linear; 
input {
    z-index: 10001; 
    &:checked {
        & + html {
            scroll-snap-type: unset; 
        }
        }
}
&.active-progress {
    opacity: 1; 
    visibility: visible; 
    transform: translateY(0); 
}
&::after {
    position: absolute; 
    content: '↑'; 
    text-align: center; 
    line-height: 46px; 
    font-size: 24px; 
    color: gray; 
    left: 0; 
    top: -2px; 
    height: 46px; 
    width: 46px; 
    cursor: pointer; 
    display: block; 
    z-index: 1; 
    -webkit-transition: all 200ms linear; 
    transition: all 200ms linear;
} 
&:hover {
    &::after {
        opacity: 0; 
    }
    &::before {
        opacity: 1; 
    }
    }
&::before {
    position: absolute; 
    content: '↑'; 
    text-align: center; 
    line-height: 46px; 
    font-size: 24px; 
    opacity: 0; 
    -webkit-text-fill-color: #F13E51; 
    left: 0; 
    top: -2px; 
    height: 46px; 
    width: 46px; 
    cursor: pointer; 
    display: block; 
    z-index: 2; 
    -webkit-transition: all 200ms linear; 
    transition: all 200ms linear; 
}
svg {
    path {
        fill: none; 
    }
    &.progress-circle {
        path {
            stroke: ${({theme})=>theme.primary}; 
            stroke-width: 4; 
            box-sizing: border-box; 
            -webkit-transition: all 200ms linear; 
            transition: all 200ms linear; 
        }
        }
    }
`;
const ProgressScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const progressPath = document.querySelector(".progress-wrap path");
    const offset = 50;
    const pathLength = progressPath?.getTotalLength();
   const showProgressBar = () => {
      if (window.scrollY > offset) {
        const progressWrap = document.querySelector(".progress-wrap");
        if (progressWrap) {
          progressWrap.classList.add("active-progress");
        }
      } else {
        const progressWrap = document.querySelector(".progress-wrap");
        if (progressWrap) {
          progressWrap.classList.remove("active-progress");
        }
      }
    };
    const updateProgress = () => {
      showProgressBar();
      const scroll = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = `${progress}`;
    };
    if (progressPath) {
      progressPath.style.transition = "none";
      progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
      progressPath.style.strokeDashoffset = `${pathLength}`;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = "stroke-dashoffset 10ms linear";

      window.addEventListener("scroll", updateProgress);
    }

 

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <ProgressScrollDiv
      className="progress-wrap"
      id="progress-scroll"
      onClick={scrollToTop}
    >
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </ProgressScrollDiv>
  );
};

export default ProgressScrollButton;
