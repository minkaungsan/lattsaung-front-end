import styled from 'styled-components'
import Panel from "muicss/lib/react/panel";

export const StyledPanel = styled(Panel)`
  width: 1024px;
  margin: 12px auto 0 auto;
  
  & .gift-add{
   
  }
`

export const EventInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`
export const LeftArea = styled.div`
  width: 100%;
  & legend{
    color: ${props => props.theme.color.primary};
    font-size: 18px;
  }
  
  @media only screen and (min-width: 1280px){
    min-width: 350px;
  }
  
`
export const RightArea = styled.div`
  flex: 1;
  padding: 24px 0 0 24px;
`

export const ImagePreview = styled.div`
  margin: 0 auto;
  background-image: url(${props => props.src});
  width: 600px;
  height: 243px;
  box-shadow: ${props => props.theme.color.grey100} 0px 0px 4px;
  position: relative;
  
  & button{
    color: ${props => props.theme.color.accent};
    background-color: ${props => props.theme.color.primary};
    box-shadow: none;
    border: 0;
    font-size: 18px;
    cursor: pointer;
    position: absolute;
    right:0px;
  }
  
  & button:hover{
    color: ${props => props.theme.color.secondary};
  }
  
`

export const GiftAdd = styled.div`
  max-width: 420px;
  display: flex;
  flex-direction: column;  
`;

export const GiftPreview = styled.div`
  background-image: url(${props => props.src});
  width: 210px;
  height: 180px;
  box-shadow: ${props => props.theme.color.grey100} 0px 0px 4px;
  position: relative;
  
  & button{
    color: ${props => props.theme.color.accent};
    background-color: ${props => props.theme.color.primary};
    box-shadow: none;
    border: 0;
    font-size: 18px;
    cursor: pointer;
    position: absolute;
    right:0px;
  }
  
  & button:hover{
    color: ${props => props.theme.color.secondary};
  }
`

export const Range = styled.div`
  font-family: Roboto;
  font-size: 18px;
  margin: 12px 0 8px 0;
  & i{
    color: ${props => props.theme.color.primary};
    font-style: normal;
    margin-right: 160px;
  }
  
  & .fa-long-arrow-alt-right{
    color: ${props => props.theme.color.primary};
    background-color: ${props => props.theme.color.accent};
    font-size: 26px;
  }
`

export const GiftSortHandleStyle = styled.button`
    border: 0;
    box-shadow: none;
    color: ${props => props.theme.color.accent};
    background-color: ${props => props.theme.color.primary};
    padding: 4px;
    width: 26px;
    height: 26px;
    cursor: move;
    
    &:hover{
      color: ${props => props.theme.color.secondary};    
    }  
`;

export const DeleteButtonStyle = styled.button`
    border: 0;
    box-shadow: none;
    color: ${props => props.theme.color.accent};
    background-color: ${props => props.theme.color.primary};
    padding: 2px 6px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    
    &:hover{
      color: ${props => props.theme.color.secondary};    
    }  
`;

export const GiftListContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  border: 1px solid ${props => props.theme.color.grey80};
  padding: 16px;
`;

export const GiftItemButtonsContainer = styled.div`

`;

export const GiftCount = styled.div`
  margin-top: 8px;
  color: ${props => props.theme.color.accent};
  background-color: ${props => props.theme.color.secondary};
  font-weight: bold;
  padding-left: 5px;
`;

export const GiftStyle = styled.div`
  background-image: url(${props => props.picture});
  box-shadow: ${props => props.theme.color.grey100} 0px 0px 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 180px;
  height: 180px;
  margin-right: 12px;
  font-size: 18px;
  
  & div {
    display: flex;
    justify-content: space-between;
  }
  
`

export const GiftName = styled.div`
    background: rgba(0,0,0,0.35);
    
    &>h4{
    margin: 0;
    font-family: Roboto;
    font-weight: normal;
    padding: 4px;
    color: ${props => props.theme.color.accent};
  }
`;

export const AddButtonStyle = styled.button`
    border: none;
    display: block;
    background-color: ${props => props.disabled ? props.theme.color.grey80 : props.theme.color.secondary};
    color: ${props => props.theme.color.accent};
    padding: 7px;
    font-size: 18px;
    width: 210px;
    display: inline-block;
    margin: 8px 0;
    
    & i{
        margin-left: 16px;
    }
    &:hover{
        color: ${props => props.disabled ? props.theme.color.accent : props.theme.color.primary};
        cursor: pointer;
    }  
`

export const SubmitButtonStyle = styled.button`
    border: none;
    background-color: ${props => props.disabled ? props.theme.color.grey80 : props.theme.color.secondary};
    color: ${props => props.theme.color.accent};
    padding: 12px;
    font-size: 24px;
    width: 210px;
    display: inline-block;
    &:hover{
        color: ${props => props.disabled ? props.theme.color.accent : props.theme.color.primary};
        cursor: pointer;
    }       
`

export const CancelButtonStyle = styled.button`
    border: none;
    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.accent};
    padding: 12px;
    margin-right: 2px;
    font-size: 24px;
    width: 210px;
    display: inline-block;
    &:hover{
        color: ${props => props.theme.color.secondary};
        cursor: pointer;
    }       
`

export const CheckBoxContainer = styled.div`
    margin-bottom: 16px;
    display: flex;
    align-items: center; 
    & label{
      font-size: 18px;
    }
`;

export const CheckBox = styled.input`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`;


export const ErrorMessage = styled.div`
    color: ${props => props.theme.color.errorRed1};
    background-color : ${props => props.theme.color.errorBackground};
    margin-bottom: 10px;
    padding-left: 15px;
    font-size: 16px;
    display: flex;
    align-items: center;
    height: 40px;
    & i{
        margin-right: 15px;
    }
`