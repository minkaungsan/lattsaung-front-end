import { changeTrigger, asyncChangeTrigger } from 'slim-redux-react'
import clone from 'lodash.clonedeep'
import merge from 'lodash.merge'
import axios from '../axios'

export const userLogin = changeTrigger('USER_LOGIN', (data, user) => data, 'state.user')

export const userLoginAsync = asyncChangeTrigger({userLogin}, (data, ct) => {
  axios.post('/user/login', data)
    .then((res) => {
      ct.userLogin(res.data)
      sessionStorage.setItem('user', JSON.stringify(res.data))
    })
})

export const userLogout = changeTrigger('USER_LOGOUT',  user => null, 'state.user')

export const getProfile = changeTrigger('USER_PROFILE_GET', (data, user) => data, 'state.profile')

export const getProfileAsync = asyncChangeTrigger({getProfile}, (data, ct) => {
  axios.get('/profile/' + data)
    .then(res => {
      ct.getProfile(res.data)
    })
})

export const toggleMenu = changeTrigger('USER_PROFILE_TOGGLE_MENU', profile => clone(merge(profile, {showMenu: !profile.showMenu})), 'state.profile' )

export const createEvent = changeTrigger('USER_PROFILE_CREATE_EVENT', profile => clone(merge(profile, {create: true})), 'state.profile')
export const cancelCreateEvent = changeTrigger('USER_PROFILE_CANCEL_EVENT', profile => clone(merge(profile, {create: false})), 'state.profile')

export const sentGift = changeTrigger('GIFT_SENT_CONFIRM', (gift_id, eventDetail) => {
  console.log(gift_id)
  let updatedGifts = eventDetail.gifts.map(g => {
    if(g.gift_id === gift_id) {
      return {...g, sent: '1'}
    }
    return g
  })
  return clone(merge(eventDetail, {gifts:updatedGifts}))
} , 'state.eventDetail')

export const sentGiftAsync = asyncChangeTrigger({sentGift}, (gift_id, ct) => {
  console.log(gift_id)
  axios.post('/gift/sent/' + gift_id)
    .then(res => {
      ct.sentGift(gift_id)
    })
})

export const receivedGift = changeTrigger('GIFT_RECEIVED_CONFIRM', (gift_id, profile) => {
  console.log(gift_id)
  let updatedGifts = profile.gifts.map(g => {
    if(g.gift_id === gift_id) {
      return {...g, received: '1'}
    }
    return g
  })
  return clone(merge(profile, {gifts:updatedGifts}))
}, 'state.profile')

export const receivedGiftAsync = asyncChangeTrigger({receivedGift}, (gift_id, ct) => {
  console.log(gift_id)
  axios.post('/gift/received/' + gift_id)
    .then(res => {
      ct.receivedGift(gift_id)
    })
})

const contactInfoUpdate = changeTrigger('CONTACT_INFO_UPDATE', (data, user) => {

  return clone(merge(user, {phone: data.phone, address: data.address}))
}, 'state.user')

export const contactInfoUpdateAsync = asyncChangeTrigger({contactInfoUpdate}, (data, ct) => {
  axios.post('/user/contact', data)
    .then(res => {
      ct.contactInfoUpdate(data)
    })
})

export const deleteEvent = changeTrigger('DELETE_EVENT',(id, profile) =>{
  let created = profile.created
  let filtered=created.filter(c => {
    if(c.event_id !== id) {
      return c
    }
  })

  return {
    created: [...filtered],
    gifts: [...profile.gifts],
    joined: [...profile.joined]
  }
},'state.profile')

export const deleteEventAsync = asyncChangeTrigger({deleteEvent},(id,ct) => {
  axios.delete('/event/delete/' + id)
    .then(res => {
      ct.deleteEvent(id)
    })

  })