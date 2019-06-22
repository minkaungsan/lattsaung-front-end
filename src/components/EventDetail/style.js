import styled from 'styled-components'
import logoPlaceholder from '../../assets/icons/logoPlaceholder.svg'
export const Wrapper = styled.div`
  width: 100%;
  margin: 52px 0 0 0;
  padding: 2px;
  
  @media only screen and (min-width:1280px){
    width: 1280px;
    margin: 57px auto auto auto;
  }
`;

export const Info = styled.div`
  
  
  @media only screen and (min-width:1280px){
    margin: 24px;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${props => props.url === ''? logoPlaceholder: props.url});
  background-size: ${props => props.url === ''? 'fit':'cover'};
  background-position: center;
  background-repeat: no-repeat;
  
  @media only screen and (min-width:1280px){
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(${props => props.url === ''? logoPlaceholder: props.url});
    background-size: ${props => props.url === ''? 'fit':'cover'};
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const Name = styled.div`
  font-size: 22px;
  font-family: 'Roboto';
  color: white;
  padding: 12px;
  background: rgba(0,0,0,0.35);
  
  @media only screen and (min-width:1280px){
    font-size: 36px;
    font-family: 'Roboto';
    color: white;
    -webkit-text-stroke: 1px ${props => props.theme.color.grey100};
    text-shadow: ${props => props.theme.color.grey180} 3px 3px 6px;
    padding: 12px;
    background: rgba(0,0,0,0.35);
  }
`;

export const TimeInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 6px 12px 0 12px;
  font-size: 2em;
  font-family: 'ShareTech';
  text-transform: uppercase;
  word-spacing: -.3em;
  letter-spacing: -.05em;
  background-color: #3f3f3f;
  border-radius: 0 0 0 0;
  color: #9b9b9b;
  
  @media only screen and (min-width:1280px){
    display: inline-block;
  justify-content: center;
  align-items: center;
  margin: 0 auto 0 auto;
  padding: 6px 12px 0 12px;
  font-size: 3.5em;
  font-family: 'ShareTech';
  text-transform: uppercase;
  word-spacing: -.3em;
  letter-spacing: -.05em;
  background-color: #3f3f3f;
  border-radius: .2em .2em 0 0;
  color: #9b9b9b;
  }
`;


export const Clock = styled.div`
  width: 300px;
  height: 121px;
  background-image: url('/images/clock.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 300px auto 24px auto;
`;

export const Owner = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  & h2 {
    display: none;
    font-size: 16px;
    color: ${props => props.theme.color.primary};
  }
  
  & a {
    font-size: 12px;
    color: ${props => props.theme.color.secondary};
    display: inline-block;
    line-height: 1;
    text-decoration: underline;
  }
  
  & img {
    width: 36px;
    height: 36px;
    margin: 0;
    border-radius: 18px;
    box-shadow: ${props => props.theme.color.grey100} 0 0 3px;
  }
  
  @media only screen and (min-width:1280px){
  
    & h2 {
      display: inline-block;
    }
    
    & a {
      font-size: 16px;
    }
  
    & img {
      width: 36px;
      height: 36px;
      margin: 0 8px;
      border-radius: 18px;
      box-shadow: ${props => props.theme.color.grey100} 0 0 3px;
    }
  }
`;

export const DetailInfo = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
  padding: 0 4px;
  
  @media only screen (min-width:1280px){
    margin-top: 8px;
    padding: 0;
  }
`;

export const JoinInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const EventDetailInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
`;

export const JoinStatus = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  & button{
    border-radius: 2px;
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.accent};
    font-size: 18px;
    padding: 8px 8px;
    border: 0;
    box-shadow: none;
  }
  
  & button:hover {
    color: ${props => props.theme.color.primary};
    cursor: pointer;
  }
  
  & button:disabled {
    font-size: 14px;
    pointer-events: none;
    color: ${props => props.theme.color.accent};
    background-color: ${props => props.theme.color.grey140}
  }
  
  @media only screen and (min-width:1280px){
    & button{
      border-radius: 2px;
      background-color: ${props => props.theme.color.secondary};
      color: ${props => props.theme.color.accent};
      font-size: 24px;
      padding: 8px 12px;
      border: 0;
      box-shadow: none;
    }
    
    & button:disabled {
      font-size: 20px;
      pointer-events: none;
      color: ${props => props.theme.color.accent};
      background-color: ${props => props.theme.color.grey140}
    }
  }
`;

export const Description = styled.div`
  font-family: 'Roboto';
  font-size: 14px;
  margin: 8px 0 16px 0px;
  color: ${props => props.theme.color.grey120};
  
  @media only screen and (min-width:1280px){
    margin: 24px 0 24px 0px;
  }
`;

export const GiftListToggle = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  border: solid ${props => props.theme.color.secondary};
  border-width: 0 0 2px 0;
  
  & i {
    width: 64px;
    height: 26px;
    font-size: 24px;
    background: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.accent};
    text-align: center;
  }
  
  & i:hover{
    color: ${props => props.theme.color.primary};
  }
  
  & h4 {
    margin: 0;
  }
`;

export const GiftList = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100%;
  margin: 16px 0;
  overflow-x: auto;
  padding: 5px 2px;
  
  &>div{
    margin-right: 8px;
  }
  
  &>div:nth-last-child(1){
  margin-right: 10px;
  }
  
  @media only screen and (min-width:1280px){
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    margin: 16px 0;
    
    &>div{
      margin-right: 8px;
    }
    
    &>div:nth-last-child(1){
    margin-right: 0;
    }
  }
  
`;

export const Gift = styled.div`
  box-shadow: ${props => props.theme.color.grey100} 0px 0px 2px;
  min-width: 160px;
  & .detail {
    border: 1px solid ${props => props.theme.color.grey60};
    border-width: 1px 0 0 0; 
  }  
    
  & .detail>h4 {
    margin: 2px;
    color: ${props => props.theme.color.secondary};
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  & div.img {
    height: 160px;
    background-image: url(${props => props.picture === ''? logoPlaceholder: props.picture});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
  
  @media only screen and (min-width:1280px){
    box-shadow: ${props => props.theme.color.grey100} 0px 0px 4px;
    flex: 1;
    min-width: 238px;
    max-width: 240px;
  
    & .detail {
      border: 1px solid ${props => props.theme.color.grey60};
      border-width: 1px 0 0 0; 
    }  
      
    & .detail>h4 {
      margin: 8px;
      color: ${props => props.theme.color.secondary};
      font-size: 18px;
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
  } 
`;

export const Winner = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  
  & a {
    margin: 0;
    color: ${props => props.theme.color.secondary};
    text-decoration: underline; 
  }
  
  & img {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    border-radius: 24px;
    box-shadow: ${props => props.theme.color.grey100} 0 0 3px;
  }      
`;

export const ConfirmGift = styled.div`
  padding: 8px;
  & .gift-confirm{
      border: 1px solid ${props => props.theme.color.grey60};
      border-width 1px 0 0 0;
      height: 30px;
      padding-top: 8px;
  }
  
  & .gift-confirm> .fa-check-circle{
    color: ${props => props.theme.color.secondary};
    font-size: 16px;
  }
  
  & .gift-confirm> .fa-times-circle{
    color: ${props => props.theme.color.errorRed2};
    font-size: 16px;
  }
`;

export const ConfirmGiftButtonStyle = styled.button`
    color: ${props => props.theme.color.accent};
    background-color: ${props => props.theme.color.primary};
    box-shadow: none;
    border: 0;
    margin-left: 8px;
    font-size: 12px;
    height: 25px;
    &:hover{
        color: ${props => props.theme.color.secondary};
    }
`;

export const CommentList = styled.div`
    
    
  & p {
    color: ${props => props.theme.color.grey180};
    margin: 8px 0 0 60px;
    font-size: 16px;
  }
  
  & button{
    border-radius: 2px;
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.accent};
    font-size: 18px;
    padding: 8px 12px;
    border: 0;
    box-shadow: none;
    margin-left: 4px;
  }
  
  & button:hover{
    color: ${props => props.theme.color.primary};
    cursor: pointer;
  }
`;

export const Comment = styled.div`
  margin: 16px 0 ;
`;

export const CommentOwner = styled.div`
  display: flex;
  align-items: center;

  
  
  & img {
    width: 48px;
    height: 48px;
    margin: 0 8px;
    border-radius: 24px;
    box-shadow: ${props => props.theme.color.grey100} 0 0 3px;
  }
  
  
`;

export const CommentInput = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 16px 0;
  border: ${props => props.theme.color.grey100} solid;
  padding-bottom: 16px;
  border-width: 0 0 2px 0;
 
  & img {
    width: 48px;
    height: 48px;
    margin: 0 8px;
    border-radius: 24px;
    box-shadow: ${props => props.theme.color.grey100} 0 0 3px;
  }
  
  & textarea {
    flex:1;
  }
`;

export const CommentUser = styled.div`
  & h3 {
    font-size: 16px;
    color: ${props => props.theme.color.primary};
    display: block;
    margin: 0 0 0 8px;
  }
  
  & span {
    font-size: 12px;
    color: ${props => props.theme.color.grey140};
    margin: 0 0 0 8px;
    display: inline;
  }
`;


