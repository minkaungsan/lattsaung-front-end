import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex:1;
  width: 100%;
  margin-top: 52px;
  padding: 12px 0;
  justify-content: flex-end;
  
  @media only screen and (min-width: 1280px) {
    width: 1232px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Sort = styled.div`
  display: flex;
  align-items: center;
  
  & i {
    font-size: 24px;
    padding-right: 8px;
    color: ${props => props.theme.color.grey100}
  }
  & div.Select-control {
    width: 90px;
    border-radius: unset;
    border-width: 0 0 1px 0;
    outline: none;
    font-size: 12px;
  }
  
  & div.Select-menu div {
    font-size: 12px;
  }
  
  & div.is-selected {
    background: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.accent};
  }
  
  & div.is-focused {
    background: ${props => props.theme.color.grey40};
  }
  
  @media only screen and (min-width: 1280px) {
    & div.Select-control {
      width: 120px;
      font-size: 14px;
    }
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  
  & i {
    font-size: 18px;
    padding-right: 8px;
    color: ${props => props.theme.color.grey100}
  }
  
  & div.Select-control {
    width: 90px;
    border-radius: unset;
    border-width: 0 0 1px 0;
    outline: none;
    font-size: 12px;
  }
  
  & div.Select-menu div {
    font-size: 12px;
  }
  
  & div.is-selected {
    background: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.accent};
  }
  
  & div.is-focused {
    background: ${props => props.theme.color.grey40};
  }
  
  @media only screen and (min-width: 1280px) {
    & div.Select-control {
      width: 120px;
      font-size: 14px;
    }
  }
  
`;

export const Count = styled.div`
  color: ${props => props.theme.color.grey120};
  font-size: 12px;
  display: flex;
  align-items: center;
  margin-right: 5px;
  @media only screen and (min-width: 1280px) {
    font-size: 14px;
  }
`;

