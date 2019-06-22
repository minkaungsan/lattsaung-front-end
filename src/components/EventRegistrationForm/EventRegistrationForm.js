import React from 'react'
import moment from 'moment'
import {connect, subscription} from 'slim-redux-react'
import {addGift, addGiftChange, deleteGift, giftPictureClear,dateChange, nameChange,
       descChange, sortGift, eventPictureClear, formSendAsync, eventAcceptTOSChange} from '../../changeTriggers/eventRegisterChangeTriggers'
import Input from 'muicss/lib/react/input'
import Textarea from 'muicss/lib/react/textarea'
import DateRange from  'react-datetime-range-picker'
import {StyledPanel,EventInfo,LeftArea,RightArea,ImagePreview,GiftAdd,GiftPreview,GiftListContainer,GiftItemButtonsContainer,GiftCount,
       Range,GiftStyle,AddButtonStyle,SubmitButtonStyle, GiftSortHandleStyle,CheckBoxContainer,CheckBox,CancelButtonStyle,DeleteButtonStyle,ErrorMessage, GiftName} from './style'
import {SortableContainer, SortableElement, SortableHandle,} from 'react-sortable-hoc'
import ImageCropper from '../Cropper/Cropper'
import GiftCropper from '../GiftImageCropper/GiftImageCropper'
import {Link} from 'react-router-dom'

const form = subscription('state.eventRegistration')
const profile = subscription('state.profile')

const GiftSortHandle = SortableHandle(() => <GiftSortHandleStyle><i className="fas fa-arrows-alt"></i></GiftSortHandleStyle> )

const GiftItem = SortableElement(({value, id, deleteGift}) =>
  <GiftStyle picture={value.picture.src}>
    <GiftItemButtonsContainer>
      <GiftSortHandle/>
      <DeleteButtonStyle  onClick={() => deleteGift(id)}><i className="fas fa-times"></i></DeleteButtonStyle>
    </GiftItemButtonsContainer>
    <GiftName>
        <h4>{value.name}</h4>
    </GiftName>
  </GiftStyle>
)

const GiftList = SortableContainer(({items, deleteGift}) => {
  return (
    <GiftListContainer>
      {items.map((value, index) => (
        <GiftItem key={`item-${index}`} index={index} value={value} id={index} deleteGift={deleteGift}/>
      ))}
    </GiftListContainer>
  )
})

class EventRegistrationForm extends React.Component {
  componentDidMount() {
    let startDate = this.getStartDate()
    let endDate = this.getEndDate()
    this.props.dateChange({start: startDate, end: endDate})

  }

  getStartDate = () => {
    let date = new Date()
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    console.log(new Date(date.getTime() + 60 * 60 * 1000))
    return new Date(date.getTime() + 60 * 60 * 1000)
  }

  getEndDate = () => {
    let date = new Date()
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000 + (60 * 60 * 1000))
  }

  validStartDate = (current) => {
    let yesterday = moment().subtract(1, 'day')
    let end = moment(this.props.form.endDate).subtract(1, 'day')
    return current.isAfter(yesterday) && current.isBefore(end)
  }

  validEndDate = (current) => {
    let startDate = moment(this.props.form.startDate)
    return current.isAfter(startDate)
  }

  render() {
    let {addGift, addGiftChange, deleteGift, giftPictureClear,dateChange, nameChange, cancel,
      descChange, eventPictureClear, sortGift, formSendAsync, form, profile, eventAcceptTOSChange} = this.props

    return(
      <StyledPanel>
        <EventInfo>
          <LeftArea>
            <legend>Register New Event</legend>
            <Input floatingLabel label="Name" onChange={e => nameChange(e.target.value)} value={form.name}/>
            <Textarea floatingLabel label="Description" rows="7" onChange={e => descChange(e.target.value)} value={form.description}/>
          </LeftArea>
          <RightArea>
            {form.picture === '' ? <ImageCropper width={600} height={243}/> :
                <ImagePreview src={form.picture.src}>
                    <button onClick={() => eventPictureClear()}><i className="fas fa-times"></i></button>
                </ImagePreview>}
          </RightArea>
        </EventInfo>
        <Range>

            <i>Start Date</i>
            <i className="fas fa-long-arrow-alt-right"></i>
            <i>End Date</i>
        </Range>
        <DateRange
          className='date-wrapper'
          pickerClassName="date-range"
          startDate={this.getStartDate()}
          endDate={this.getEndDate()}
          isValidStartDate={this.validStartDate}
          isValidEndDate={this.validEndDate}
          inputProps={{className:'date-input'}}
          onChange={dateChange}
        />
        <GiftAdd>
          <Input floatingLabel label="Gift Name" onChange={e => addGiftChange(e.target.value)} value={form.addGift}/>
          {form.tempGiftPic === '' ? <GiftCropper width={210} height={180}/>
            : <GiftPreview src={form.tempGiftPic.src}> <button onClick={() => giftPictureClear()}> <i className="fas fa-times"></i> </button> </GiftPreview>}

          {form.gifts.length === 5 || form.addGift === '' ? <AddButtonStyle disabled>Add Gift<i className="fas fa-arrow-down"></i></AddButtonStyle>
              : <AddButtonStyle onClick={e =>{e.preventDefault(); addGift()}}>Add Gift<i className="fas fa-arrow-down"></i></AddButtonStyle>}
        </GiftAdd>
        <GiftCount>
          {form.gifts.length} gift(s)
        </GiftCount>
        <GiftList
          axis="xy" items={form.gifts}
          deleteGift={deleteGift}
          useDragHandle
          onSortEnd={({oldIndex, newIndex}) => sortGift({oldIndex, newIndex})}/>
        <CheckBoxContainer>
          <CheckBox type="checkbox" onChange={e => eventAcceptTOSChange(e.target.checked)} />
          <label>I agree with <Link to='/tos'>Terms of Service</Link></label>
        </CheckBoxContainer>
          {form.error !== null?
            <ErrorMessage>
                <span><i className="fa fa-times"></i></span>
                {form.error}
            </ErrorMessage> : ''
              }
        <div>
          <CancelButtonStyle onClick={cancel}>Cancel</CancelButtonStyle>
          {profile.formSendStatus === 'busy' ? <SubmitButtonStyle disabled>Submit</SubmitButtonStyle> :
          <SubmitButtonStyle onClick={()=> formSendAsync()}>Submit</SubmitButtonStyle>}
        </div>
      </StyledPanel>
    )
  }
}

const EventRegistrationFormContainer = connect(EventRegistrationForm, {addGift, addGiftChange, deleteGift, giftPictureClear,dateChange,
  nameChange, descChange, eventPictureClear, sortGift, formSendAsync, form, profile, eventAcceptTOSChange})

export default EventRegistrationFormContainer