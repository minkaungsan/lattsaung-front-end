import styled from 'styled-components'
import Panel from 'muicss/lib/react/panel'


export const Menu = styled.div`
  ${props => props.showMenu ? 
  "width: 200px;" :
  "width: 0"};
  
  height: 100%;
  transition: 0.5s;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  background-color: ${props => props.theme.color.primary};
  left: 0;
  
  
  
  @media only screen and (min-width: 1280px) {
    width: 180px;
    left: unset;
    z-index: unset;
    overflow-x:unset;
    position: relative;
    background-color: ${props => props.theme.color.accent};
    box-shadow: ${props => props.theme.color.grey100} 0px 0px 4px;
    height: calc(100vh - 80px);
    
    & div:first-child div {
      display: none;
    }
  }
`;

export const MenuItem = styled.div`
  padding: 8px;
  color: ${props => props.selected ? props.theme.color.secondary : props.theme.color.accent};
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  transition: 0.3s;
  
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  
  @media only screen and (min-width: 1280px) {
    color: ${props => props.selected ? props.theme.color.secondary : props.theme.color.primary};
  }
  
`;

export const Container = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 57px auto 0 auto;
  
  @media only screen and (min-width: 1280px) {
    margin: 64px auto 0 auto;
  }
`;

export const Content = styled.div`
  
  flex:1;
  @media only screen and (min-width: 1280px) {
    padding: 12px;
    margin-right: 24px;
    box-shadow: ${props => props.theme.color.grey100} 0px 0px 4px;
  }
`;
