import styled from 'styled-components'
import {Link} from 'react-router-dom'
import logoPlaceholder from '../../assets/icons/logoPlaceholder.svg'
export const CreateEventButtonStyle = styled.button`
    width: 56px;
    height: 56px;
    border-radius: 28px;
    position: fixed;
    bottom: 5px;
    right: 5px;
    padding: 2px 0 0 0;
    margin-top: 8px;
    font-size: 28px;
    border: none;
    text-align: center;
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.accent};
    
    box-shadow: ${props => props.theme.color.grey100} 2px 2px 4px;
    &:hover{
        color: ${props => props.theme.color.primary};
        cursor: pointer;
        box-shadow: ${props => props.theme.color.primary} 2px 2px 4px;
    }
    
    @media only screen and (min-width: 1280px) {
      width: 56px;
      height: 56px;
      border-radius: 28px;
      position: relative;
      bottom: 5px;
      right: 0;
      padding: 2px 0 0 0;
      margin-top: 8px;
      font-size: 28px;
    }       
`;

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
  padding-left: 0;
  display: flex;
  align-items: center;
  
  
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
  
  &>h1 {
    margin: 0 0 0 5px;
    font-size: 22px;
    display: inline;
  }
`;

export const Event = styled.div`
  text-decoration: none;
  box-shadow: ${props => props.theme.color.grey100} 0px 0px 4px;
  flex: 1;
  max-width: 230px;
  min-width: 230px;
  margin-bottom: 12px;
  margin-right: 12px;
  position: relative;
  
  & .detail {
    color: ${props => props.theme.color.primary};
  }  
  
  & .detail>i {
    font-size: 22px;
    margin: 8px 4px;
  }
  
  & .detail>h4 {
    margin: 8px 0;
    display: inline-block;
    text-transform: capitalize;
  }
  
  & .detail>button {
    color: ${props => props.theme.color.secondary};
    background-color: ${props => props.theme.color.primary};
    border: none;
    box-shadow: none;
    position: absolute;
    right: 0px;
    font-size: 16px;
    height: 25px;
    margin: 8px 4px;
    cursor: pointer;
  }
  
  &:hover {
    cursor: pointer;
    text-decoration: none;
    box-shadow: ${props => props.theme.color.primary} 0px 0px 4px;
  } 
`;

export const EventImage = styled(Link)`

    height: 200px;
    background-image: url(${props => props.picture === '' ? logoPlaceholder: props.picture});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    
`;

export const EventTitle = styled(Link)`
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.accent};
    display:block;
  
  &>h3 {
    padding: 8px;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; 
  } 
  
  &>h4 {
    padding: 8px;
    margin: 0;
    padding-top: 0; 
  }
`;