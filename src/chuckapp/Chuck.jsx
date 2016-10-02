import React, { Component } from 'react'

import Fact from './Fact'
import FactsCounter from './FactsCounter'
import FactsScore from './FactsScore'
import ChuckImage from './ChuckImage'

import img from './assets/chuck.jpg'

import './Chuck.css'

class Chuck extends Component {

  handleImageClick = () => () => {
    if (this.props.onAddFact) {
      this.props.onAddFact()
    }
  }

  handleCounterClick = () => () => {
    if (this.props.onClearFacts) {
      this.props.onClearFacts()
    }
  }

  render() {
    const { facts, score } = this.props
    return (
      <div>
        <div className="chuck-header">
          <FactsCounter count={facts.length} onClick={this.handleCounterClick()} />
          <ChuckImage url={img} onClick={this.handleImageClick()} />
          <FactsScore score={score} />
        </div>
        {facts.map((fact, i) => <Fact key={i} text={fact} />)}
      </div>
    )
  }
}

Chuck.propTypes = {
  facts: React.PropTypes.array,
  score: React.PropTypes.number,
  onAddFact: React.PropTypes.func,
  onClearFacts: React.PropTypes.func,
}

Chuck.defaultProps = {
  facts: [],
  score: 0,
}

export default Chuck
