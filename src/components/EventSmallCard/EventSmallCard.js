import React from 'react'

import {
  Wrapper, Image, Description, Detail, Info, Lower, Upper,
  JoinButton, Name, Owner, Participants, Time,
} from './style'

const EventSmallCard = ({event}) => {
  return (
    <Wrapper>
      <Image url={event.picture}/>
      <Detail>
        <div>
          <Name>
            {event.name}
          </Name>
          <Description>
            {event.description}
          </Description>
        </div>
        <div>
          <Owner>
            <h3>By:</h3>
            <img src={event.u_picture}/>
            <h3>{event.u_name}</h3>
          </Owner>
          <Info>
            <Time>
              <i className="far fa-clock"></i>
              <h3>
                {(() => {switch(event.status){
                  case 'finished':
                    return 'Finished ' + event.end_date.fromNow()
                  case 'ongoing':
                    return 'Ending ' + event.end_date.fromNow()
                  case 'upcoming':
                    return 'Starting ' + event.start_date.fromNow()
                  }
                })()}
              </h3>
            </Time>
            <Participants>
              <i className="fas fa-users"></i>
              <h3>{event.participants}</h3>
            </Participants>

          </Info>
          <JoinButton to={'/event/' + event.event_id}>
            <h3>Details</h3>
            <span><i className="fa fa-angle-right"></i></span>
          </JoinButton>
        </div>
      </Detail>
    </Wrapper>
  )
}

export default EventSmallCard