import React, {Component} from 'react'
import {CreateEventButtonStyle,Wrapper,PageTitle,Event,EventImage,EventTitle} from './style'
import EventRegistrationForm from '../../components/EventRegistrationForm/EventRegistrationForm'
import moment from "moment/moment";
import {connect, subscription} from "slim-redux-react";
import {createEvent, cancelCreateEvent, deleteEventAsync, toggleMenu} from "../../changeTriggers/userChangeTriggers";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const profile = subscription('state.profile')

class MyEvents extends Component{

  deleteEvent = (id) => {
    confirmAlert({
      title: 'Confirm delete',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.deleteEventAsync(id)
        },
        {
          label: 'No',
          onClick: () => ''
        }
      ]
    })

  };




  render() {
    const {createdEvents, profile, createEvent, cancelCreateEvent, deleteEventAsync, toggleMenu} = this.props

    return (
      <React.Fragment>
          <PageTitle>
              <button onClick={ ()=> toggleMenu()}><i className="fas fa-bars"></i></button>
              <h1>My Events</h1>
          </PageTitle>
        <div>
          {!profile.create ? <CreateEventButtonStyle onClick={() => createEvent()}><i className="fa fa-plus"></i> </CreateEventButtonStyle> : ''}
        </div>
          <Wrapper>
            {createdEvents && !profile.create ? createdEvents.map(ce => <Event key={ce.event_id} >
                <EventTitle to={'/event/' + ce.event_id}>
                    <h3>{ce.name}</h3>
                    <h4>End Date - {moment(ce.end_date).format('YYYY MMM DD')}</h4>
                </EventTitle>
                <EventImage picture={ce.picture} to={'/event/' + ce.event_id}>
                </EventImage>
                <div className="detail">
                    <i className="far fa-clock"></i>
                    <h4>{ce.status}</h4>
                  {ce.status === 'upcoming' ?
                    <button onClick={() => this.deleteEvent(ce.event_id)}>Delete</button>:''
                  }
                </div>
            </Event>) : ''}
            {profile.create ? <EventRegistrationForm cancel={() => cancelCreateEvent()}/> : ''}
          </Wrapper>

      </React.Fragment>
    )
  }
}

const MyEventsContainer = connect(MyEvents, { profile, createEvent, cancelCreateEvent, deleteEventAsync, toggleMenu })

export default MyEventsContainer