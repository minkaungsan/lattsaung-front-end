import React from 'react'
import '../../assets/css/clock.css'
import {countdownEnd} from '../../changeTriggers/eventChangeTriggers'
import {connect, subscription} from 'slim-redux-react'
import moment from 'moment'
import {ClockWrapper} from './style'

const eventDetail = subscription('state.eventDetail')

class AnimatedCard extends React.Component {
  render() {
    const { position, digit, animation } = this.props;
    return(
      <div className={`flipCard ${position} ${animation}`}>
        <span>{digit}</span>
      </div>
    );
  }
}

class StaticCard extends React.Component {
  render() {
    const { position, digit } = this.props;
    return(
      <div className={position}>
        <span>{digit}</span>
      </div>
    );
  }
}

class FlipUnitContainer extends React.Component {

  render() {
    const { digit, shuffle, unit } = this.props;

    let now = digit + 1;
    let before = digit;

    // to prevent a negative value
    if( unit !== 'hours') {
      before = before === -1 ? 59 : before;
    } else {
      before = before === -1 ? 23 : before;
    }

    // add zero
    if( now < 10 ) now = `0${now}`;
    if( before < 10 ) before = `0${before}`;

    // shuffle digits
    const digit1 = shuffle ? before : now;
    const digit2 = !shuffle ? before : now;

    // shuffle animations
    const animation1 = shuffle ? 'fold' : 'unfold';
    const animation2 = !shuffle ? 'fold' : 'unfold';

    return(
      <div className={'flipUnitContainer'} style={{margin: this.props.mid ? '0 1em' : '0'}}>
        <StaticCard
          position={'upperCard'}
          digit={before}
        />
        <StaticCard
          position={'lowerCard'}
          digit={now}
        />
        <AnimatedCard
          position={'first'}
          digit={digit1}
          animation={animation2}
        />
        <AnimatedCard
          position={'second'}
          digit={digit2}
          animation={animation1}
        />
      </div>
    );
  }
}

class FlipClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.updateTime(),
      50
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  updateTime() {
    // get new date
    const currentTime = moment();
    if(this.props.endDate.isBefore(currentTime)) {
      this.props.countdownEnd()
    }
    const time = moment.duration(this.props.endDate.diff(currentTime));
    // set time units
    const hours = time.hours();
    const minutes = time.minutes();
    const seconds = time.seconds();
    // on hour chanage, update hours and shuffle state
    if( hours !== this.state.hours) {
      const hoursShuffle = !this.state.hoursShuffle;
      this.setState({
        hours,
        hoursShuffle
      });
    }
    // on minute chanage, update minutes and shuffle state
    if( minutes !== this.state.minutes) {
      const minutesShuffle = !this.state.minutesShuffle;
      this.setState({
        minutes,
        minutesShuffle
      });
    }
    // on second chanage, update seconds and shuffle state
    if( seconds !== this.state.seconds) {
      const secondsShuffle = !this.state.secondsShuffle;
      this.setState({
        seconds,
        secondsShuffle
      });
    }
  }
  render() {
    const { hours, minutes, seconds, hoursShuffle, minutesShuffle, secondsShuffle } = this.state;
    return(
      <div className={'flipClock'}>
        <FlipUnitContainer
          unit={'hours'}
          digit={hours}
          shuffle={hoursShuffle}
        />
        <FlipUnitContainer
          unit={'minutes'}
          digit={minutes}
          shuffle={minutesShuffle}
          mid
        />
        <FlipUnitContainer
          unit={'seconds'}
          digit={seconds}
          shuffle={secondsShuffle}
        />
      </div>
    );
  }
}

const FlipClockContainer = connect(FlipClock, {countdownEnd, eventDetail})

class Clock extends React.Component {
  render() {
    return(
      <ClockWrapper>
        <FlipClockContainer endDate={this.props.endDate}/>
      </ClockWrapper>
    );
  }
}



export default Clock