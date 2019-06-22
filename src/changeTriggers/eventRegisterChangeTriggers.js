import * as FB from 'fb-sdk-wrapper'
import { changeTrigger, asyncChangeTrigger } from 'slim-redux-react'
import { arrayMove } from 'react-sortable-hoc'
import clone from 'lodash.clonedeep'
import merge from 'lodash.merge'
import axios from '../axios'
import moment from 'moment'

export const addGift = changeTrigger('EVENT_FORM_ADD_GIFT',
  formData => clone(merge(formData,
    {
      gifts: [...formData.gifts, { name: formData.addGift, picture: formData.tempGiftPic }],
      addGift: '',
      tempGiftPic: '',
    })),
  'state.eventRegistration')

export const deleteGift = changeTrigger('EVENT_FORM_DELETE_GIFT',
  (gift_index, formData) => clone({ ...formData, gifts: formData.gifts.filter((g, index) => index !== gift_index) }),
  'state.eventRegistration')

export const addGiftChange = changeTrigger('EVENT_FORM_ADD_GIFT_CHANGE',
  (data, formData) => clone(merge(formData, { addGift: data})),
  'state.eventRegistration')

export const giftPictureChange = changeTrigger('EVENT_FORM_GIFT_PICTURE_CHANGE',
  (data, formData) => clone(merge(formData, { tempGiftPic: data })),
  'state.eventRegistration')

export const giftPictureClear = changeTrigger('GIFT_PICTURE_CLEAR',
  formData => clone(merge(formData, { tempGiftPic: ''})),
  'state.eventRegistration')


export const nameChange = changeTrigger('EVENT_FORM_NAME_CHANGE',
  (data, formData) => clone(merge(formData, { name: data })),
  'state.eventRegistration')

export const descChange = changeTrigger('EVENT_FORM_DESC_CHANGE',
  (data, formData) => clone(merge(formData, { description: data })),
  'state.eventRegistration')

export const dateChange = changeTrigger('EVENT_FORM_DATE_CHANGE',
  (data, formData) =>{

    return clone(merge(formData, { startDate: data.start, endDate: data.end })) },
  'state.eventRegistration')

export const sortGift = changeTrigger('EVENT_FORM_SORT_GIFT',
  (data, formData) => ({...formData, gifts: arrayMove(formData.gifts, data.oldIndex, data.newIndex)}),//clone(merge(formData, { gifts: arrayMove(formData.gifts, data.oldIndex, data.newIndex) })),
  'state.eventRegistration')

export const eventPictureChange = changeTrigger('EVENT_PICTURE_CHANGE',
  (data, formData) => clone(merge(formData, { picture: data })),
  'state.eventRegistration')

export const eventPictureClear = changeTrigger('EVENT_PICTURE_CLEAR',
  formData => clone(merge(formData, { picture: '' })),
  'state.eventRegistration')



export const eventAcceptTOSChange = changeTrigger('EVENT_ACCEPTTOS_CHANGE',
    (data,formData) => clone(merge(formData, { tos: data})),
    'state.eventRegistration')

export const formClear = changeTrigger('EVENT_FORM_SENT',  formData => ({
  name: '',
  description: '',
  picture: '',
  startDate: '',
  endDate: '',
  addGift: '',
  gifts: [],
  tempGiftPic: '',
  error: null,
  tos: false
}), 'state.eventRegistration')

export const formSend = changeTrigger('EVENT_FORM_SENT', (data, formData) => data, 'state.eventRegistration')

export const formSuccess = changeTrigger('EVENT_FORM_SUCCESS', (data, profile) => {
  profile.created = [data, ...profile.created]
  profile.create = false
    return clone(profile)
  }
    , 'state.profile')

export const formSendStatus = changeTrigger('USER_FORM_SENT_STATUS', (data, profile) => clone(merge(profile, {formSendStatus: data})), 'state.profile')

export const formSendAsync = asyncChangeTrigger({ formSend, formSuccess, formSendStatus, formClear }, ct => {

  let form = ct.state.eventRegistration
  form.error = null;
  let user = ct.state.user
  let formData = new FormData()
  let now = new Date()
  if (form.name === '') {
    return ct.formSend(clone(merge(form, {error: 'Please enter event name!'})))
  } else if (form.description === '') {
    return ct.formSend(clone(merge(form, {error: 'Please enter description!'})))
  } else if (form.startDate < now || form.startDate > form.endDate) {
    return ct.formSend(clone(merge(form, {error: 'Invalid start date!'})))
  } else if(form.gifts.length === 0) {
    return ct.formSend(clone(merge(form, {error: 'Please add at least one gift! '})))
  }else if(!form.tos) {
      return ct.formSend(clone(merge(form, {error: 'Please accept Terms and Conditions to proceed '})))
  }
  let start = new Date(form.startDate)
  start.setMinutes(0)
  start.setSeconds(0)
  start.setMilliseconds(0)
  let end = new Date(form.endDate)
  end.setMinutes(0)
  end.setSeconds(0)
  end.setMilliseconds(0)
  let startDate = moment(start).utcOffset(480).format('YYYY-MM-DD HH:mm:ss')
  let endDate = moment(end).utcOffset(480).format('YYYY-MM-DD HH:mm:ss')

  if(form.error === null) {
    formData.set('user_id', user.user_id)
    formData.set('name', form.name)
    formData.set('description', form.description)
    formData.set('type', 'premium')
    formData.set('status', 'upcoming')
    formData.set('picture', form.picture.file, 'main')
    formData.set('start', startDate)
    formData.set('end', endDate)
    form.gifts.map((g, index) => {
      if(g.picture.file) {
        formData.set(g.name + index, g.picture.file, index.toString())
      } else {
        formData.set('gift_' + index, g.name)
      }
    })

    ct.formSendStatus('busy')

    console.log(formData);
    axios({
      method: 'post',
      url: '/event',
      data: formData,
      config: {
        headers: { 'Content-Type': 'multipart/form-data' },
      },
    })
      .then(res => {
        ct.formClear()
        ct.formSendStatus('finished')
        ct.formSuccess(res.data)
        FB.ui({
          method: 'share_open_graph',
          action_type: 'og.likes',
          action_properties: JSON.stringify({
            object:'https://lattsaung.com/event/' + res.data.event_id,
          })
        })
      })
  }
})