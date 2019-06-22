import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 52px auto auto auto;
  padding: 12px 12px;
  
  & h1 {
    display: inline-block;
    text-align: center;
  }
  
  & h2 {
    font-size: 20px;
  }
  
  & p{
    font-size: 16px;
  }
`;

export const LastUpdateTime = styled.div`
  font-size: 13px;
  margin-bottom: 16px;    
`;

export const AccessingService = styled.p`
  font-weight: bold;  
`;