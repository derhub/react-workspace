
import { connect } from 'react-redux'

import React from 'react'

import './App.css'
import { increase, decrease } from '@space/core/redux/actions';


function App({ value, increment, decrement, loading, failed }) {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={() => increment()}>
            Increment
          </button>
          {' '}
          <button onClick={() => decrement()}>
            Decrement
          </button>
          <hr />
          <div>
            Clicked: {value} times
            <div><i>
              {loading ?
                <small style={{ marginLeft: '10px' }}>loading . . . </small>
                : null}

              {failed ?
                <small>failed please try again </small>
                : null}
            </i></div>
          </div>
        </div>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return { ...state.counter }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increase()),
    decrement: () => dispatch(decrease()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
