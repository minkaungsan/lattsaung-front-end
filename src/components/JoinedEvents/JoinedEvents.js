import React from 'react'
import {Event,Wrapper,PageTitle} from './style'
import {toggleMenu} from '../../changeTriggers/userChangeTriggers'
import moment from 'moment'
import {connect} from "slim-redux-react";


const JoinedEvents = ({joinedEvents,toggleMenu}) => (
    <React.Fragment>
    <PageTitle>
        <button onClick={ ()=> toggleMenu()}><i className="fas fa-bars"></i></button>
        <h1>Joined Events</h1>
    </PageTitle>
  <Wrapper>

    {joinedEvents ? joinedEvents.map(je => <Event key={je.event_id} picture={je.picture} to={'/event/' + je.event_id}>
        <div className="title">
            <h3>{je.name}</h3>
            <h4>End Date - {moment(je.end_date).format('YYYY MMM DD')}</h4>
        </div>
        <div className="img">
        </div>
        <div className="detail">
            <i className="fa fa-clock-o"></i>
            <h4>{je.status}</h4>
        </div>
    </Event>) : ''}
  </Wrapper>
    </React.Fragment>
)

const JoinedEventsContainer = connect(JoinedEvents,{toggleMenu});
export default JoinedEventsContainer;