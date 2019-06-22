import React, {Component} from 'react'
import {connect, subscription} from 'slim-redux-react'
import {getParticipantsAsync, getWinnersAsync} from '../../changeTriggers/eventChangeTriggers'
import { Model, CloseModelButtonStyle,Container, Spinner, Panel, GiftList, Gift } from './style'

const users = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's']

const event = subscription('state.eventDetail')

const participants = subscription('state.participants')

const winners = subscription('state.winners')

class Carousel extends Component {
  state = {
    showRoll : false,
    currentGift : 0,
    user: [],
    winners: [],
    visibility: true
  }

  componentDidMount() {
    if(this.props.winners.length === 0 || this.props.participants.length === 0) {
     // setTimeout(()=> {
        this.props.getWinnersAsync(this.props.event.event_id)
        this.props.getParticipantsAsync(this.props.event.event_id)
      //}, 3000)
    }
    // setTimeout(()=>{
    //   if((this.props.winners[0].user_id === null || this.props.participants.length === 0)) {
    //     this.setState({...this.state, visibility: false})
    //   }else{
    //     this.selectUsersToRoll()
    //   }
    // }, 6000)

    // setTimeout(()=>{
    //   if(this.state.currentGift < this.props.winners.length) {
    //     this.setState({...this.state, currentGift: this.state.currentGift + 1, showRoll: false})
    //     this.selectUsersToRoll()
    //   }
    // }, 10000)
  }

  selectUsersToRoll = () => {
    let p = this.props.participants
    let w = this.props.winners
    let user = []
    for (let i = 0; i < 19; i++) {
      user[i] = p[Math.floor(Math.random() * p.length)]
    }
    user[9] = w[this.state.currentGift]
    if(this.state.currentGift < this.props.winners.length){
      this.setState({...this.state, user: user, winners: [...this.state.winners, w[this.state.currentGift].name], showRoll: true})
      setTimeout(()=> {
        this.setState({ ...this.state, showRoll: false, currentGift: this.state.currentGift + 1 })
        this.selectUsersToRoll()
      }, 10000)
    }
  }

  hideModel = () => {
    this.setState({...this.state,visibility: false})
  }

  render() {
    return (
      <Model visibility={this.state.visibility}>
        {this.props.winners.length > 0 && this.state.winners.length === 0 ? this.selectUsersToRoll() : ''}
        <CloseModelButtonStyle onClick = {() => this.hideModel()}>
          <i className="fas fa-times"></i>
        </CloseModelButtonStyle>
        <Container>
          {this.state.showRoll ? <Spinner total={this.state.user.length}>
            {this.state.user.length > 0 ? this.state.user.map((u, index) => <Panel key={index} index={index} total={this.state.user.length}>{u.name}</Panel>) : ''}
          </Spinner> : ''}
        </Container>

        <GiftList>
          {this.props.event.gifts.map((g, index) =>
            <Gift
              active={index === this.state.currentGift}
              position={index}
              total={this.props.event.gifts.length}
              picture={g.picture}
            >
              <div className="content">
                <h5>{g.name}</h5>
                {index < this.state.winners.length ? <h6>{this.state.winners[index]}</h6> : ''}
              </div>
            </Gift>)}
          {/*<Gift active={false} position={0} total={4}>a</Gift>*/}
          {/*<Gift active={false} position={1} total={4}>b</Gift>*/}
          {/*<Gift position={2} total={4}>c</Gift>*/}
          {/*<Gift position={3} total={4}>d</Gift>*/}
        </GiftList>
      </Model>
    )
  }
}

const CarouselContainer = connect(Carousel, {getParticipantsAsync, getWinnersAsync, event, participants, winners})

export default CarouselContainer