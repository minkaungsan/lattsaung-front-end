import { changeTrigger, asyncChangeTrigger } from 'slim-redux-react'
import moment from 'moment'
import axiosRetry from 'axios-retry'
import axios from '../axios'

axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay, retries: 5})

export const getEvents = changeTrigger('GET_EVENTS', (data, events) => data, 'state.events')

export const getEventsAsync = asyncChangeTrigger({getEvents}, (ct) => {
  axios.get('/events')
    .then(res => {
      let events = res.data.map(e => ({...e, start_date: moment(e.start_date+ ' +08:00', "YYYY-MM-DD HH:mm:ss Z"), end_date: moment(e.end_date+ ' +08:00', "YYYY-MM-DD HH:mm:ss Z") }))
      ct.getEvents(events)
    })
})

export const getEventById = changeTrigger('GET_EVENT_ID', (data, eventDetail) => data, 'state.eventDetail')

export const getEventByIdAsync = asyncChangeTrigger({getEventById}, (id, ct) => {
  axios.get('/event/' + id )
    .then(res => {
      let eventDetail = res.data
      let comments = eventDetail.comments.map(c => ({...c, time: moment(c.time, "YYYY-MM-DD HH:mm:ss")}))
      eventDetail.start_date = moment(eventDetail.start_date + ' +08:00', "YYYY-MM-DD HH:mm:ss Z")
      eventDetail.end_date = moment(eventDetail.end_date + ' +08:00', "YYYY-MM-DD HH:mm:ss Z")
      eventDetail.comments = comments
      ct.getEventById(eventDetail)
    })
})

export const comment = changeTrigger('USER_COMMENT', (comment, eventDetail) => ({...eventDetail, comments: [...eventDetail.comments, comment]}), 'state.eventDetail')

export const commentAsync = asyncChangeTrigger({comment}, (data, ct) => {
  axios.post('/user/comment', data)
    .then(res => {

      ct.comment({...res.data, time: moment(res.data.time)})
    })
})

export const countdownEnd = changeTrigger('COUNTDOWN_END', eventDetail => ({...eventDetail, comments: [...eventDetail.comments], countdownEnd: true}) , 'state.eventDetail')

export const getParticipants = changeTrigger('GET_PARTICIPANTS', (data, participants) => data, 'state.participants')

export const getParticipantsAsync = asyncChangeTrigger({getParticipants}, (id, ct) => {
  axios.get('/participants/' + id)
    .then(res => {
      ct.getParticipants(res.data)
    })
})

export const getWinners = changeTrigger('GET_WINNERS', (data, winners) => data, 'state.winners')

export const getWinnersAsync = asyncChangeTrigger({getWinners}, (id, ct) => {
  axios.get('/winners/' + id)
    .then(res => {
      ct.getWinners(res.data)
    })
})

