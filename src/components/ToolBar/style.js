import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';
import LogoShort from '../../assets/icons/Logo.svg';
import LogoLong from '../../assets/icons/LogoLong.svg';

export const Wrapper = styled.div`
  font-family: 'Roboto';
  background: ${props => props.theme.color.secondary};
  box-shadow: ${props => props.theme.color.grey100} 0 2px 6px;
  color: ${props => props.theme.color.white};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 52px;
  
  @media only screen and (min-width: 1280px) {
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
  }
  
`;

export const LeftGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2px;
  align-items: center;
  
  @media only screen and (min-width: 1280px) {
    margin-left: 24px;
  }
`;

export const RightGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 12px;
  
  @media only screen and (min-width: 1280px) {
    margin-right: 24px;
  }
`;



export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4px;
  &>a {
    display: inline-block;
    width: 50%;
    align-items: center;
  }
`;

export const LogoImage = styled.div`
  vertical-align: center;
  width: 36px;
  height: 36px;
  background-image: url(${LogoShort});
  background-repeat: no-repeat;
  background-position: center;
  
  @media only screen and (min-width: 1280px) {
    width: 100px;
    height: 48px;
    background-image: url(${LogoLong});
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  
  & input {
    min-width: 227px;
    width: 100%;
    height: 38px;
    font-family: Roboto;
    font-size: 14px;
    padding-left: 8px;
    border: 1px solid ${props => props.theme.color.accent};
    text-overflow: ellipsis;
    padding-right: 30px;
  }
  
  & i {
    font-size: 24px;
    margin-left: -36px;
    color: ${props => props.theme.color.grey140};
  }
  
  @media only screen and (min-width: 1280px) {
    margin-left: 24px;
    min-width: 450px;
    
    & input{
      font-size: 18px;
      padding-right: 0;
    }
  }
`;

export const Help = styled.div`

  display: none;
  align-items: center;
  //color: ${props => props.theme.color.grey140};
  color: ${props => props.theme.color.accent};
  & i {
    font-size: 27px;
  }
  
  &>h2 {
    display: inline-block;
    font-size: 18px;
    margin: 0 0 0 8px;
  }
  
  @media only screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const LogIn = styled.div`
  display: flex;
  align-items: center;
  //color: ${props => props.theme.color.grey140};
  color: ${props => props.theme.color.accent};
  
  
  & i {
    font-size: 24px;
    width:24px;
  }
  
  & .pic {
    width: 36px;
    height: 36px;
    border-radius: 18px;
    border: solid 2px;
    background-image: url(${props => props.picture});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  &>a {
    display: none;
    font-size: 11px;
    margin: 0 0 0 8px;
    cursor: pointer;
    color: ${props => props.theme.color.accent};
  }
  
  &>a:hover{
    color: ${props=> props.theme.color.primary};
    text-decoration: none;
  }
  
  & .log-in-text {
    display: inline-block;
    font-size: 11px;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 4px;
  }
  
  & .log-in-text:hover {
    cursor: pointer;
    color: ${props => props.theme.color.primary};
  }
  
  @media only screen and (min-width: 1280px) {
  margin-left: 24px;
    &>a {
    display: inline-block;
    font-size: 18px;
    margin: 0 0 0 8px;
    }
    
    & .log-in-text {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 8px;
    }
  }
`;

export const DropdownStyled = styled(Dropdown)`
  padding-left: 4px;
  
  & .mui-btn {
    background: transparent;
    padding: 0;
    margin: 0;
    color: ${props => props.theme.color.accent};
    
  }
  
  
  & .mui-btn .mui-caret {
    border-top: 6px solid;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
  }
  
  
  & .mui-btn:hover, & .mui-btn:focus, & .mui-btn:active {
    background: transparent;
    border: none;
    box-shadow: none;
    color: ${props => props.theme.color.primary};
    
  }
  
  & .mui-dropdown__menu {
    margin-top: 9px;
    left: -146px;
  }
  
  &>.mui-dropdown__menu>li>a {
    display: flex;
    align-items: center;
    color: ${props => props.theme.color.grey140};
    cursor: pointer;
  }
  
  &>.mui-dropdown__menu>li>a:hover {
    background-color: ${props => props.theme.color.primary};
  }
`;

export const DropdownItemStyled = styled(DropdownItem)`
  color: ${props => props.theme.color.grey140};
`;

export const Suggestion = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  background: white;
  padding: 0;
  margin: 0;
  width: 450px;
  border: ${props => props.theme.color.grey140} solid 2px;
  position: absolute;
  top: 50px;
  z-index: 1;
`;

export const ListItem = styled.div`
  padding: 8px;
  background: ${props => props.active ? props.theme.color.secondary : 'white'};
  color: ${props => props.active ? props.theme.color.accent : props.theme.color.grey220};
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 3px 20px;
  color: ${props => props.theme.color.grey140};
  
  &:hover {
    background-color: ${props => props.theme.color.primary};
    //color: rgba(0, 0, 0, 0.87);
    color: ${props => props.theme.color.accent};
  }
`;