import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, Button } from 'react-native-elements'
import questions from './questions.json'

const startPage = 0
const questionPage = 1

export default class App extends React.Component {
  constructor (props) {
    super()
    this.state = {
      currentState: startPage,
      currentQuestion: 0,
      score: 0
    }
  }

  nextQuestion (x) {
    if (x.correct) {
      this.setState({ score: this.state.score + 1 })
    }
    this.setState({ currentQuestion: this.state.currentQuestion + 1 })
  }

  render () {
    return (
      <Card containerStyle={styles.container}>
        {(this.state.currentState === startPage)

          ? <>
            <Text style={styles.header}>Nick's Quiz</Text>
            <Button
              title="Let's Go!"
              buttonStyle={styles.button}
              onPress={ () => this.setState({ currentState: questionPage })}
            />
          </>

          : (this.state.currentQuestion < questions.length)
            ? <>
              <Text style={styles.question}>{questions[this.state.currentQuestion].question}</Text>
              <View>
                {questions[this.state.currentQuestion].answers.map((ans, i) => {
                  return <Button title={ans.text} key={i} buttonStyle={styles.button} onPress={() => this.nextQuestion(ans)} />
                })}
              </View>
            </>

            : <>
              <Text style={styles.question}>Quiz Complete</Text>
              <Text style={styles.score}>Your Score: {this.state.score}/{questions.length}</Text>
              <Button title="Start Over" buttonStyle={styles.button} onPress={() => this.setState({ currentState: startPage, currentQuestion: 0, score: 0 })}/>
            </>
        }
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 40,
    width: 300,
    textAlign: 'center',
    marginTop: 150,
    backgroundColor: 'goldenrod'
  },

  header: {
    fontSize: 40,
    fontWeight: '700',
    padding: 20,
    fontFamily: 'Arial',
    alignItems: 'center'
  },

  button: {
    backgroundColor: 'red',
    margin: 10,
    color: 'black'

  },

  question: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10
  },

  score: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
