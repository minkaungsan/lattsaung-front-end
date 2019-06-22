import styled from 'styled-components'
import {Link} from 'react-router-dom'
import logoPlaceholder from '../../assets/icons/logoPlaceholder.svg'
export const Wrapper = styled.div`
  display: flex; 
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
  
  @media only screen and (min-width:1280px){
    justify-content: unset;
  }
`;

export  const PageTitle = styled.div`
  background-color : ${props => props.theme.color.secondary};
  color: ${props => props.theme.color.accent};
  display: flex;
  align-items: center;
  &>h1 {
    margin: 0 0 0 5px;
    font-size: 22px;
    display: inline;
  }
  
  &>button {
    box-shadow: none;
    border: 0;
    color: ${props => props.theme.color.accent};
    background-color: transparent;
    padding: 0;
    margin: 0px 5px;
    
    @media only screen and (min-width:1280px){
      display: none;
    }
  }
  
  &>button:hover {
    color: ${props => props.theme.color.primary};
    cursor: pointer;
  }
  
  &>button>i {
    font-size: 24px;
  }
`;

export const Event = styled(Link)`
  box-shadow: ${props => props.theme.color.grey100} 0px 0px 4px;
  flex: 1;
  max-width: 230px;
  min-width: 230px;
  margin-bottom: 12px;
  margin-right: 12px;

  & .detail {
    padding-top: 4px;
    color: ${props => props.theme.color.primary};
  }  
  
  & .detail>i {
    font-size: 24px;
    margin-left: 4px;
  }
  
  & .detail>h4 {
    margin: 8px;
    display: inline-block;
    text-transform: capitalize;
  }
  
  & div.img {
    height: 200px;
    background-image: url(${props => props.picture === ''? logoPlaceholder: props.picture});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
  
  & div.title {
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.accent};
  }
  
  & div.title>h3 {
    padding: 8px;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  } 
  
  & div.title>h4 {
    padding: 8px;
    margin: 0;
    padding-top: 0; 
  } 
`;