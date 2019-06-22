import React, {Component} from 'react'
import Cropper from 'react-avatar-image-cropper';
import {connect} from 'slim-redux-react'
import {giftPictureChange} from '../../changeTriggers/eventRegisterChangeTriggers'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  box-shadow: ${props => props.theme.color.grey100} 0px 0px 4px;
`

class GiftCropper extends Component {

  apply = (file) => {
    let src = window.URL.createObjectURL(file)
    this.props.giftPictureChange({src, file})
    console.log(src)
  }

  render() {
    return (
      <Wrapper width={this.props.width} height={this.props.height}>
        <Cropper apply={this.apply} />
      </Wrapper>
    )
  }
}

const GiftCropperContainer = connect(GiftCropper, {giftPictureChange})

export default GiftCropperContainer