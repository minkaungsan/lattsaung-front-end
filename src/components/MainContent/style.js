import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4px 8px;
  
  @media only screen and (min-width: 1280px) {
    padding: 12px 24px;
      
    }
`;