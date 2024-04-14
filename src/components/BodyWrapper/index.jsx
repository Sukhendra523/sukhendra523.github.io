import React from 'react'
import styled from 'styled-components';
const Body = styled.div`
    margin: auto;
    position: relative;
`;

const BodyWrapper = ({children}) => {
  return (
    <Body>
        {children}
    </Body>
  )
}

export default BodyWrapper
