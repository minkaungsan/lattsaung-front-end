import React, { Component, Fragment } from 'react'
import orderBy from 'lodash.orderby'
import filterBy from 'lodash.filter'
import {Wrapper} from './style'
import { connect, subscription } from 'slim-redux-react'
import { getEventsAsync } from '../../changeTriggers/eventChangeTriggers'
import EventBigCard from '../EventBigCard/EventBigCard'
import EventSmallCard from '../EventSmallCard/EventSmallCard'
import SortFilter from '../SortFilter/SortFilter'
import Spinner from '../Spinner/Spinner'

const events = subscription('state.events')
const sort = subscription('state.sort')
const filter = subscription('state.filter')
const search = subscription('state.search')

class MainContent extends Component {
  componentDidMount() {
    this.props.getEventsAsync()
  }

  render() {
    let {events, sort, filter, search} = this.props
    let eventToRender, filteredEvents
    eventToRender = events
    if(search.searched) {
      eventToRender = search.events
    }

    if(sort !== 'all' || filter !== 'none') {

      switch (filter) {
        case 'ongoing':
          filteredEvents = filterBy(eventToRender, {'status':'ongoing'})
          break
        case 'upcoming':
          filteredEvents = filterBy(eventToRender, {'status':'upcoming'})
          break
        case 'finished':
          filteredEvents = filterBy(eventToRender, {'status':'finished'})
          break
        default:
          filteredEvents = eventToRender
          break
      }
      console.log(filteredEvents)
      switch (sort) {
        case 'popular':
          eventToRender = orderBy(filteredEvents, ['type', 'participants' ], ['desc', 'desc'])
          break
        case 'start':
          eventToRender = orderBy(filteredEvents, ['type', 'start_date' ], ['desc', 'asc'])
          break
        case 'end':
          eventToRender = orderBy(filteredEvents, ['type', 'end_date' ], ['desc', 'desc'])
          break
        default:
          eventToRender = filteredEvents
          break
      }
    }


    return (
      <Fragment>
        {events !== null ? <SortFilter/> : ''}
      <Wrapper>
        {events === null ? <Spinner/> : eventToRender.length > 0 ?
          eventToRender.map(e => e.type==='premium' ?
            <EventBigCard key={e.event_id} event={e}/> :
            <EventSmallCard key={e.event_id} event={e}/>
          ) : <h1>no result</h1>}
      </Wrapper>
      </Fragment>
    )
  }
}

export default connect(MainContent, {getEventsAsync, events, sort, filter, search})