import styled from 'styled-components'
import {Link} from 'react-router-dom'
import logoPlaceholder from '../../assets/icons/logoPlaceholder.svg'
export const Wrapper = styled.div`
  font-family: 'Roboto';
  display: flex;
  width: 100%;
  margin-bottom: 12px;
  box-shadow: ${props => props.theme.color.grey100} 0px 0px 4px;
  @media only screen and (min-width: 1280px) {
    width: 610px;
  }
`;

export const Image = styled.div`
  width: 305px;
  height: 338px;
  display: none;
  background-image: url(${props => props.url === ''? logoPlaceholder: props.url});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media only screen and (min-width: 1280px) {
    display: inline-block;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  justify-content: space-between;
  margin: 18px;
`;

export const Name = styled.h1`
  margin: 0 0 12px 0;
  font-size: 18px;
  color: ${props => props.theme.color.grey120};
`;

export const Description = styled.h2`
  margin: 0 0 12px 0;
  font-size: 16px;
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
`;

export const Time = styled.div`
  display: flex;
  align-items: center;

  & i {
    font-size: 18px;
    margin-right: 8px;
  }
  
  & h3 {
    display: inline-block;
    font-size: 14px;
  }
`;

export const Participants = styled.div`
  display: flex;
  align-items: center;

  & i {
    font-size: 18px;
    margin-right: 8px;
  }
  
  & h3 {
    display: inline-block;
    font-size: 14px;
  }
`;

export const JoinButton = styled(Link)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${props => props.theme.color.accent};
  background-color: ${props => props.theme.color.secondary};
  
  & h3 {
    font-size: 16px;
    display: inline;
    margin: 8px 0;
  }
  
  & i {
    font-size: 18px;
    position: relative;
    left: 16px;
  }
  
  &:hover{
    text-decoration: none;
    color: ${props => props.theme.color.primary};
  }
`;