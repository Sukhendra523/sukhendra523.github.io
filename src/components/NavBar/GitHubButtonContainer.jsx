import React from 'react';
import styled from "styled-components";
import { Bio } from '../../data/constants';

const GitHubButton = styled.a`
border: 1px solid ${({ theme }) => theme.primary};
border-radius: 20px;
cursor: pointer;
padding: 10px 20px;
font-size: 16px;
font-weight: 500;
transition: all 0.6s ease-in-out;
&.github-link{
 color: ${({ theme , isRenderMobileView }) => isRenderMobileView ? theme.text_primary: theme.primary};
 background: ${({ theme, isRenderMobileView }) => isRenderMobileView ? theme.primary:theme.bg};
}
&:hover {
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_primary};
}

`

const GitHubButtonContainer = ({isRenderMobileView}) => {
  return (
    <GitHubButton href={Bio.gitHubLink} className='github-link' target='_blank' isRenderMobileView={isRenderMobileView}>
      GitHub Profile
    </GitHubButton>
  )
}

export default GitHubButtonContainer