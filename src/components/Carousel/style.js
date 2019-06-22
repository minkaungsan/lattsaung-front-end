import styled, {keyframes} from 'styled-components'
import logoPlaceholder from '../../assets/icons/logoPlaceholder.svg'

const rotate = keyframes`
  from {
    transform: translateZ(-629px) rotateY(0deg);
  }

  to {
    transform: translateZ(-629px) rotateY(${((10 * (360/19)) + 720) +'deg'});
  }
`;

const fadeIn = keyframes`
  99% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
`;


export const Container = styled.div`
  width: 210px;
  height: 140px;
  margin: 80px auto 40px;
  border: solid 1px #ccc;
  position: relative;
  perspective: 1100px;
`;

export const Spinner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  //transform: translateZ(${props => '-'+ Math.round(105 / Math.tan( Math.PI / props.total)) + 'px'});
  animation: ${rotate} 7s cubic-bezier(0.400, 0.005, 0.000, 1.005) forwards;
`;

export const Panel = styled.figure`
  margin: 0;
  box-sizing: content-box;
  line-height: 116px;
  font-size: 16px;
  text-align: center;
  display: block;
  position: absolute;
  width: 186px;
  height: 116px;
  left: 10px;
  top: 10px;
  border: 2px solid black;
  background-color: hsla(${props => props.index * (360/props.total)}, 100%, 50%, 0.8);
  transform: rotateY(${props => props.index * (360/props.total) + 'deg'}) translateZ(${props => Math.round(105 / Math.tan( Math.PI / props.total)) + 'px'});
`;

export const Model = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  ${props => props.visibility ? 'display: block;' : 'display: none;'}
`;

export const CloseModelButtonStyle = styled.button`
  position: fixed;
  right: 10%;
  top: 10%;
  color: ${props => props.theme.color.secondary};
  
  &:hover{
    color: ${props => props.theme.color.primary};
    cursor: pointer;
  }
`;

export const GiftList = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 1280px;
  margin: 300px auto 0 auto;
`;

const getOffSet = (position, total) => {
  let Even = total%2 === 0;
  let mid1 = Even ? Math.floor(total/2) : null
  let mid2 = Math.floor(total/2) + 1
  if(Even && position < mid2) {
    return  (((mid1 - (position + 1)) * 140) + 70)
  } else if (Even && position > mid1) {
    return (((mid2 - (position + 1)) * 140) + 70)
  } else if (!Even && (position+1) === mid2) {
    return ''
  }

}

export const Gift = styled.div`
  transition: all 1s;
  position: absolute;
  left: calc(50% ${props => { 
     let position = props.position + 1
     let total = props.total
     let even = total%2 === 0
     if(even) {
       if(position === Math.floor(total/2)) {
         return '- 140px' 
       }
       if(position === Math.floor(total/2) + 1) {
         return ''
       }
       if(position < Math.floor(total/2)) {
         return '- ' + ((Math.floor(total/2) - position) * 140 + 140) + 'px'
       }
       if(position > Math.floor(total/2) + 1) {
         return '+ ' + (Math.abs(((Math.floor(total/2) + 1 ) - position)) * 140) + 'px'
       }
       
     } else {
       if(position === Math.floor(total/2) + 1) {
         return '- 70px'
       }
       if(position === Math.floor(total/2) + 2) {
         return '+ 70px'
       }
       if(position < Math.floor(total/2) + 1) {
         return '- ' + (((Math.floor(total/2) + 1 ) - position) * 140 + 70) + 'px'
       }
       return '+ ' + (Math.abs(((Math.floor(total/2) + 2) - position)) * 140 + 70)  + 'px'
     }
  }});
  ${props => props.active ? 
  'width: 186px; height: 186px; transform: translateX(-50%) translateY(-235px); left: 50%;' 
  : 
  'width: 140px; height: 140px; transform: translateX(0) translateY(0);'}
  
  & h5 {
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.accent};
    margin: 0;
    text-align: center;
  }

  & h6 {
    background-color: ${props => props.theme.color.grey220};
    color: ${props => props.theme.color.accent};
    visibility: hidden;
    animation: ${fadeIn} 8s forwards;
    margin: 0;
    font-size: 12px;
    padding: 3px;
  }
  
  & .content {
    background-image: url(${props => props.picture === ''? logoPlaceholder:props.picture});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-origin: content-box;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 1;
    width: inherit;
    height: inherit;
    padding: 1px;
  }
  
`;