import React, { Component } from 'react'
import { connect, subscription } from 'slim-redux-react'
import axios from '../../axios'
import { getEventByIdAsync, commentAsync } from '../../changeTriggers/eventChangeTriggers'
import {sentGiftAsync, userLoginAsync} from '../../changeTriggers/userChangeTriggers'
import { Wrapper, Info, TimeInfo, Image, Name, Description, GiftList, CommentList, Comment,
    CommentInput, Gift, GiftListToggle, CommentOwner, Owner, DetailInfo, JoinInfo, Winner, CommentUser, EventDetailInfo,
    Time,Participants, JoinStatus ,ConfirmGift,ConfirmGiftButtonStyle} from './style'
import Clock from '../../components/Clock/Clock'
import Carousel from  '../../components/Carousel/Carousel'
import AnimateHeight from 'react-animate-height'
import Spinner from '../../components/Spinner/Spinner'
import moment from 'moment'
import * as FB from 'fb-sdk-wrapper'

const eventDetail = subscription('state.eventDetail')
const user = subscription('state.user')

class EventDetail extends Component {
  state = {
    giftListToggle: true,
    commentListToggle: true,
    comment: '',
    joinStatus: '',
  }

  componentDidMount() {
    this.props.getEventByIdAsync(this.props.match.params.id)
    // var self = this;
      if(this.props.user) {
        this.checkStatus(this.props.user.user_id, this.props.match.params.id)
      }
      // else {
      //     const myInterval = setInterval(
      //       function () {
      //         if (self.props.user) {
      //           self.checkStatus(self.props.user.user_id, self.props.match.params.id)
      //           clearInterval(myInterval)
      //         }
      //       }
      //       , 500);
      // }
  }

  giftToggle = () => {
    let gt = this.state.giftListToggle
    this.setState({giftListToggle: !gt})
  }

  commentChange = (e) => {
    this.setState({
      ...this.state,
      comment: e.target.value
    })
  }

  commentToggle = () => {
    let ct = this.state.commentListToggle
    this.setState({commentListToggle: !ct})
  }

  comment = () => {

    if (this.state.comment.trim() !== '')  {
      this.props.commentAsync({user_id: this.props.user.user_id, event_id: this.props.eventDetail.event_id, comment: this.state.comment })
      this.setState({
        ...this.state,
        comment: ''
      })
    }
  }

  shareFBApi = () => {
    if(this.props.user) {
      FB.ui({
        method: 'share_open_graph',
        action_type: 'og.likes',
        action_properties: JSON.stringify({
          object: 'https://lattsaung.com/event/' + this.props.eventDetail.event_id,
        })
      }).then(res => {
        console.log(res)
        if (res.length === 0 || res.error_code === 3501) {
          axios.post('/user/join-event', {user_id: this.props.user.user_id, event_id: this.props.eventDetail.event_id})
            .then(res => {
              if (res.status === 200) {
                this.setState({...this.state, joinStatus: 'joined'})
              } else {
                this.setState({...this.state, joinStatus: ''})
              }
            })
        }
      })
    }
  }

  shareFB = () => {
    // if(!this.props.user) {
    //   FB.login()
    //     .then(response => {
    //       if (response.status === 'connected') {
    //         const dataToFetch = {
    //           fields: 'name, id, picture',
    //         }
    //
    //         FB.api('/me', 'get', dataToFetch)
    //           .then(userData => {
    //             let result = {
    //               name: userData.name,
    //               fb_id: userData.id,
    //               picture: userData.picture.data.url,
    //             }
    //
    //             this.props.userLoginAsync(result)
    //             setTimeout(() => {
    //               if(this.props.user) {
    //                 axios.post('/user/check-join-status', {user_id: this.props.user.user_id, event_id: this.props.match.params.id})
    //                   .then(res => {
    //                     if(res.data.status === 'joinable') {
    //                       this.shareFBApi()
    //                     }
    //                   })
    //               }
    //             }, 4000)
    //
    //           })
    //           .catch(err => {
    //             console.log('Login Failed')
    //             //console.log(err)
    //           });
    //       }
    //     })
    // }else {
      this.shareFBApi()
    // }
  }

  ownerShare = () => {
    FB.ui({
      method: 'share_open_graph',
      action_type: 'og.likes',
      action_properties: JSON.stringify({
        object:'https://lattsaung.com/event/' + this.props.eventDetail.event_id,
      })
    })
  }

  checkStatus = (user_id, event_id) => {
    axios.post('/user/check-join-status', {user_id, event_id})
      .then(res => {
        this.setState({...this.state, joinStatus: res.data.status})
      })
  }

  render() {
    const { eventDetail, user } = this.props
    return (
      <React.Fragment>
        {eventDetail !== null ? <Wrapper>
          {eventDetail.countdownEnd ? <Carousel/> : ''}
          <Info>
            <Image url={eventDetail.picture}>
            <Name>{eventDetail.name}</Name>
              {(()=> {
                if(!eventDetail.countdownEnd){
                switch (eventDetail.status) {
                  case 'finished':
                    return <TimeInfo>Finished {eventDetail.end_date.fromNow()}</TimeInfo>
                  case 'upcoming':
                    return <TimeInfo>Starting {eventDetail.start_date.fromNow()}</TimeInfo>
                  case 'ongoing':
                    return eventDetail.end_date.diff(moment(), 'hours') <= 24 ? <Clock endDate={eventDetail.end_date}/> : <TimeInfo>End {eventDetail.end_date.fromNow()}</TimeInfo>
                }}
              })()}
            </Image>
            <DetailInfo>
              <Owner>
                  <h2>By:</h2>
                  <img src={eventDetail.u_picture}/>
                  <a href={eventDetail.u_link} target="_blank">{eventDetail.u_name}</a>
              </Owner>
              {user ? <JoinStatus>
                  {(() => {
                      switch(this.state.joinStatus) {
                          case '' :
                            this.checkStatus(this.props.user.user_id, this.props.match.params.id)
                              return ''
                          case 'owner':
                              return <button onClick={this.ownerShare}>Share</button>
                          case 'joinable':
                              return <button onClick={this.shareFB}>Share & Join</button>
                          case 'joined':
                              return <h3>Joined</h3>
                      }
                  })()}

              </JoinStatus>: <JoinStatus><button onClick={this.shareFB} disabled>Please Log In To Join</button></JoinStatus>}
              <JoinInfo>
                <Participants>
                    <i className="fas fa-users"></i>
                    <h3>{eventDetail.participants}</h3>
                </Participants>

              </JoinInfo>
            </DetailInfo>
            <Description>{eventDetail.description}</Description>
            <GiftListToggle onClick={this.giftToggle}>
              <h4>{eventDetail.gifts.length} Gifts</h4>
              {this.state.giftListToggle ? <i className="fa fa-angle-double-up"></i> : <i className="fa fa-angle-double-down"></i>}
            </GiftListToggle>
            <AnimateHeight duration={500} height={this.state.giftListToggle ? 'auto' : 0}>
            <GiftList>
              {eventDetail.gifts.length > 0 ? eventDetail.gifts.map(g => <Gift key={g.gift_id} picture={g.picture}>
                  <div className="img">
                  </div>
                  <div className="detail">
                    <h4>{g.name}</h4>
                    { g.u_name && (eventDetail.end_date.diff(moment(), 'seconds') <= -30) ?
                      <Winner>
                          <img src={g.u_picture}></img>
                          <a href={g.u_link} target="_blank">{g.u_name}</a>
                      </Winner> : ''}
                      { user && eventDetail.user_id === user.user_id && g.u_name ?
                      <ConfirmGift>
                        <h5>Phone: {g.phone}</h5>
                        <h5>Address: {g.address}</h5>
                              <div className="gift-confirm">
                                Gift Sent? {parseInt(g.sent) ? <i className="fa fa-check-circle"></i> : <i className="fa fa-times-circle"></i> }
                                <ConfirmGiftButtonStyle onClick={() => this.props.sentGiftAsync(g.gift_id)} >Confirm Sent</ConfirmGiftButtonStyle>
                              </div>
                      </ConfirmGift>
                          : '' }
                  </div>
                </Gift>): ''}
            </GiftList>
            </AnimateHeight>
            <GiftListToggle onClick={this.commentToggle}>
              <h4>{eventDetail.comments.length} Comments</h4>
              {this.state.commentListToggle ? <i className="fa fa-angle-double-up"></i> : <i className="fa fa-angle-double-down"></i>}
            </GiftListToggle>
            <AnimateHeight duration={500} height={this.state.commentListToggle ? 'auto' : 0}>
            <CommentList>
              {user !== null ? <CommentInput>
                <img src={user.picture}/>
                <textarea rows="3" placeholder="Say something..." value={this.state.comment} onChange={this.commentChange}/>
                <button onClick={() => this.comment()}>Comment</button>
              </CommentInput> : <h4>Please log in to comment...</h4>}
              {eventDetail.comments.length > 0 ? eventDetail.comments.map(c => <Comment key={c.id}>
                <CommentOwner>
                    <img src={c.picture}/>
                    <CommentUser>
                        <h3>{c.u_name}</h3>
                        <span>{c.time.fromNow()}</span>
                    </CommentUser>
                </CommentOwner>
                <p>{c.comment}</p>
              </Comment>) : ''}
            </CommentList>
            </AnimateHeight>
          </Info>
        </Wrapper> : <Spinner/>}
      </React.Fragment>
    )
  }
}

export default connect(EventDetail, { eventDetail, getEventByIdAsync, commentAsync, user, sentGiftAsync, userLoginAsync })

