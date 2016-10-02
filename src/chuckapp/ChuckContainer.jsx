import React, { Component } from 'react'

import Chuck from './Chuck'
import { factsJson } from './assets/facts'

class ChuckContainer extends Component {

  constructor(props) {
    super(props)
    this.state = { facts: [], score: 0 }
    this.updateFacts = this.updateFacts.bind(this)
    this.clearFacts = this.clearFacts.bind(this)
  }

  componentDidMount() {
    this.updateFacts()
  }

  updateFacts() {
    const randomFact = factsJson[Math.floor(Math.random() * factsJson.length)]
    const currentFacts = [...this.state.facts]
    currentFacts.push(randomFact.fact)
    this.setState({
      facts: currentFacts,
      score: 0,
    })
  }

  clearFacts() {
    this.setState({
      facts: [],
      score: 0,
    })
  }

  render() {
    return (
      <Chuck
        facts={this.state.facts}
        score={this.state.score}
        onAddFact={this.updateFacts}
        onClearFacts={this.clearFacts}
      />
    )
  }
}

export default ChuckContainer
