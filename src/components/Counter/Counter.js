import React from 'react'
import { connect, subscription, changeTrigger } from 'slim-redux-react'

const counter = subscription('state.counter')

const counterPlus = changeTrigger('INC', (value, counter) => counter + value, 'state.counter')
const counterMinus = changeTrigger('DEC', state => ({...state, counter: state.counter - 1}))

const Counter = ({counter, counterPlus, counterMinus}) => (
  <div>
    Current Counter: {counter}
    <div>
      <button onClick={e => counterPlus(1)}>+</button>
      <button onClick={e => counterMinus()}>-</button>
    </div>
  </div>
)

export default connect(Counter, { counter, counterPlus, counterMinus })