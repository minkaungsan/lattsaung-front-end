import styled from 'styled-components'
import {Link} from 'react-router-dom'
import logoPlaceholder from '../../assets/icons/logoPlaceholder.svg'

export const Wrapper = styled.div`
  font-family: 'Roboto';
  display: block;
  margin-bottom: 12px;
  box-shadow: ${props => props.theme.color.grey100} 0px 0px 4px;
  width: 100%;
  padding: 10px;
  
  @media only screen and (min-width: 1280px) {
    display: flex;
    flex: 1;
  }
`;

export const Image = styled.div`
  
  width:100%;
  height: 80px;
  display: inline-block;
  
  
  background-image: url(${props => props.url === '' ? logoPlaceholder : props.url });
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
    
  @media only screen and (min-width: 1280px) {
    width: 450px;
    height: 338px;
    display: inline-block;
    background-size: cover;
    background-position: center;  
    }
  
`;

export const Detail = styled.div`
  display: inline-flex;
  flex:1;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  
  @media only screen and (min-width: 1280px) {
    margin: 28px 24px;
  }
`;

export const Name = styled.h1`
  margin: 0 0 12px 0;
  font-size: 26px;
  color: ${props => props.theme.color.grey120};
`;

export const Description = styled.h2`
  margin: 0 0 12px 0;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  color: ${props => props.theme.color.grey100};
`;

export const Owner = styled.div`
  display: flex;
  align-items: center;

  & h3 {
    font-size: 16px;
    color: ${props => props.theme.color.grey140};
    display: inline-block;
  }
  
  & img {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    border-radius: 18px;
    box-shadow: ${props => props.theme.color.grey100} 0 0 3px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (min-width: 1280px) {
    display: inline-flex;
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;

  & i {
    font-size: 24px;
    margin-right: 8px;
  }
  
  & h3 {
    display: inline-block;
    font-size: 18px;
  }
`;

export const Participants = styled.div`
  display: flex;
  align-items: center;

  & i {
    font-size: 24px;
    margin-right: 8px;
  }
  
  & h3 {
    display: inline-block;
    font-size: 18px;
  }
  @media only screen and (min-width: 1280px) {
    margin-left: 100px;
  }
`;

export const JoinButton = styled(Link)`
  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  text-decoration: none;
  color: ${props => props.theme.color.accent};
  background-color: ${props => props.theme.color.secondary};
  
  & h3 {
    display: inline-block;
    
  }

  & i {
    display: inline-block;
    position: relative;
    left: 28px;
    font-size: 18px;
  }
  
  &:hover{
    text-decoration: none;
    color: ${props => props.theme.color.primary};
  }
  
  @media only screen and (min-width: 1280px) {
    width: 250px;
    height: 70px;
    float: right;
    & i {
    display: inline-block;
    position: relative;
    left: 28px;
    font-size: 24px;
    }
  }
`;

