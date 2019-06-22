import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: inline-block;
  width: 24px;
  align-items: center;
  justify-content: center;
`;


const Icon = ({name}) => (
  <Wrapper>
    <i className={'fa '+name}></i>
  </Wrapper>
)

export default Icon