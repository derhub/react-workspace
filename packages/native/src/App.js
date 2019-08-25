import { connect } from 'react-redux'
import { increase, decrease } from '@space/core/redux/actions'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

export function App({ increment, value, decrement, failed, loading }) {

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>Touch: {value} times</Text>
        </View>
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={increment}>
            <Text style={styles.buttonText}>Increment</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={decrement}>
            <Text style={styles.buttonText}>Decrement</Text>
          </TouchableOpacity>
        </View>

        <View>
          {loading ?
            <Text style={styles.failedText}>loading . . .</Text>
            : null}

          {failed ?
            <Text style={styles.failedText}>failed please try again</Text>
            : null}
        </View>

      </SafeAreaView>
    </View >
  )
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

export default connect(mapStateToProps, mapDispatchToProps)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  counterTitle: {
    fontFamily: 'System',
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
  counterText: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '400',
    color: '#000',
  },
  failedText: {
    fontFamily: 'System',
    fontSize: 9,
    fontWeight: '400',
    color: '#000',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: '300',
    color: '#007AFF',
    marginLeft: 10,
    marginRight: 40,
  },
})
