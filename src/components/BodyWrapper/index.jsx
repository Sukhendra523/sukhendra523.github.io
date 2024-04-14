import React from 'react'
import styled from 'styled-components';
import StarsCanvas from '../canvas/Stars';

const Body = styled.div`
    margin: auto;
    position: relative;
`;

const BodyWrapper = ({children}) => {
  return (
    <Body>
        <StarsCanvas />
        {children}
    </Body>
  )
}

export default BodyWrapper
