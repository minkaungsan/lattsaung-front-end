import React, {Component} from 'react'
import Cropper from 'react-avatar-image-cropper';
import ImageEditor from 'react-avatar-editor';
import {connect} from 'slim-redux-react'
import {eventPictureChange} from '../../changeTriggers/eventRegisterChangeTriggers'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin: 0 auto;
  box-shadow: ${props => props.theme.color.grey100} 0px 0px 4px;
`

class ImageCropper extends Component {

  apply = (file) => {
    let src = window.URL.createObjectURL(file)
    this.props.eventPictureChange({src, file})
    console.log(file)
  }

  //setEditorRef = (editor) => this.editor = editor

  render() {
    return (
      <Wrapper width={this.props.width} height={this.props.height}>
        <Cropper apply={this.apply} />
        {/*<ImageEditor*/}
          {/*ref={this.setEditorRef}*/}
          {/*image={this.props.file}*/}
          {/*width={250}*/}
          {/*height={250}*/}
          {/*border={50}*/}
          {/*color={[255, 255, 255, 0.6]} // RGBA*/}
          {/*scale={1.2}*/}
          {/*rotate={0}*/}
        {/*/>*/}
      </Wrapper>
    )
  }
}

const ImageCropperContainer = connect(ImageCropper, {eventPictureChange})

export default ImageCropperContainer