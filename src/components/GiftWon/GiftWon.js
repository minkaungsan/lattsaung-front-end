import React from 'react'
import {Gift,Wrapper,PageTitle,ReceieveGiftButtonStyle,Detail} from './style'
import moment from 'moment'
import {toggleMenu} from '../../changeTriggers/userChangeTriggers'
import {connect} from "slim-redux-react";

const GiftWon = ({gifts, received,toggleMenu}) => (
    <React.Fragment>
        <PageTitle>
            <button onClick={ ()=> toggleMenu()}><i className="fas fa-bars"></i></button>
            <h1>Gifts Acquired</h1>
        </PageTitle>
  <Wrapper>
    {gifts ? gifts.map(g => <Gift key={g.gift_id} picture={g.picture}>
        <div className="title">
            <h3>{g.event_name}</h3>
            <h4>{moment(g.end_date).format('YYYY MMM DD')}</h4>
        </div>
        <div className="img">
        </div>
        <Detail>
            <h4>{g.name}</h4>
            <h4>Gift Sent {parseInt(g.sent) ? <i className="fa fa-check-circle"></i> : <i className="fa fa-times-circle"></i> }</h4>

            { parseInt(g.received) ? <h4>Receieved Gift <i className="fa fa-check-circle"></i></h4>:
            <React.Fragment>
              <h5>Receieved Gift <i className="fa fa-times-circle"></i></h5>
              <ReceieveGiftButtonStyle onClick={() => received(g.gift_id)}>Received</ReceieveGiftButtonStyle>
            </React.Fragment>
              }
        </Detail>
    </Gift>) : ''}
  </Wrapper>
    </React.Fragment>
)

const GiftWonContainer = connect(GiftWon,{toggleMenu});
export default GiftWonContainer;