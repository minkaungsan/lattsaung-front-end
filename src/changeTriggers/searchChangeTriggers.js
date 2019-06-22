import { changeTrigger, asyncChangeTrigger } from 'slim-redux-react'
import { getEvents } from './eventChangeTriggers'
import moment from 'moment'
import axios from '../axios'

export const getMatch = changeTrigger('GET_MATCH', (data, search) => ({ ...search, match: data }), 'state.search')
export const updateTerm = changeTrigger('UPDATE_TERM', (data, search) => ({ ...search, term: data }), 'state.search')
export const getSearch = changeTrigger('GET_SEARCH', (data, search) => ({ ...search, events: data }), 'state.search')
export const searchToggle = changeTrigger('SEARCH_TOGGLE', (data, search) => ({
  ...search,
  searched: data,
}), 'state.search')

export const mouseOverMatch = changeTrigger('MOUSE_OVER_MATCH', (data, search) => ({
  ...search,
  active: data,
}), 'state.search')

export const clickMatch = asyncChangeTrigger({ getSearch, getMatch, updateTerm, searchToggle }, (m, ct) => {
  let search = ct.state.search
  axios.get('/search', { params: { term: search.term } })
    .then((res) => {
      let events = res.data.map(e => ({ ...e, start_date: moment(e.start_date, "YYYY-MM-DD HH:mm:ss"), end_date: moment(e.end_date, "YYYY-MM-DD HH:mm:ss") }))
      ct.getSearch(events)
      ct.searchToggle(true)
      ct.getMatch([])
      ct.updateTerm(m)
    })
})

export const getMatchAsync = asyncChangeTrigger({ getMatch, updateTerm }, (e, ct) => {
  ct.updateTerm(e.target.value)
  if (e.target.value) {
    axios.get('/match', { params: { term: e.target.value } })
      .then((res) => {
        ct.getMatch(res.data)
      })
  } else {
    ct.getMatch([])
  }
})

export const keyWatch = changeTrigger('SEARCH_KEY_WATCH', (term, active, search) =>
  ({ ...search, term, active }), 'state.search')

export const getSearchAsync = asyncChangeTrigger({
  getEvents,
  getSearch,
  keyWatch,
  getMatch,
  updateTerm,
  searchToggle,
}, (keyCode, term, ct) => {
  let search = ct.state.search
  let active = null
  if (search.match.length > 0) {
    if (keyCode === 40) {
      if (search.active === null) {
        active = 0
      } else if (search.active === search.match.length - 1) {
        active = search.active
      } else {
        active = search.active + 1
      }
    }
    if (keyCode === 38) {
      if (search.active === null) {
        active = null
      } else if (search.active === 0) {
        active = search.active
      } else {
        active = search.active - 1
      }
    }
    if (keyCode === 13) {
      axios.get('/search', { params: { term: search.term } })
        .then(res => {
          let events = res.data.map(e => ({ ...e, start_date: moment(e.start_date, "YYYY-MM-DD HH:mm:ss"), end_date: moment(e.end_date, "YYYY-MM-DD HH:mm:ss") }))
          ct.getSearch(events)
          ct.searchToggle(true)
          ct.getMatch([])
          ct.updateTerm(search.term)
        })
    }
    ct.keyWatch(search.match[active], active)
  } else if (search.term === '' && keyCode === 13) {
    ct.searchToggle(false)
  } else {
    axios.get('/search', { params: { term: search.term } })
      .then(res => {
        let events = res.data.map(e => ({ ...e, start_date: moment(e.start_date, "YYYY-MM-DD HH:mm:ss"), end_date: moment(e.end_date, "YYYY-MM-DD HH:mm:ss") }))
        ct.getSearch(events)
        ct.searchToggle(true)
        ct.getMatch([])
        ct.updateTerm(search.term)
      })
  }
})
