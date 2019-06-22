import styled from 'styled-components'


export const Wrapper = styled.div`
  display: flex; 
  flex-wrap: wrap;
`;

export const ContactInfo = styled.div`
  padding: 8px;
  color: ${props => props.theme.color.primary};
`;

export const ContactInputs = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.theme.color.grey80};
  padding: 15px;
  width: 100%;
  
  & .mui-textfield > input{
  }
  
  & input[type=submit] {
    color: ${props => props.theme.color.accent};
    background-color: ${props => props.theme.color.secondary};
    width: 100px;
    height: 40px;
    border: 0;
    border-radius: 0px;
    box-shadow: none;
    font-size: 18px;
  }
  
  & input[type=submit]:hover {
    text-decoration: none;
    color: ${props => props.theme.color.primary};
  }
  @media only screen and (min-width:1280px){
    width: 600px;
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

