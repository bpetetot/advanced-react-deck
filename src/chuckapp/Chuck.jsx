import React from 'react'

import Fact from './Fact'
import FactsStat from './FactsStat'
import ChuckImage from './ChuckImage'
import JCVDImage from './JCVDImage'

import './Chuck.css'

const Chuck = ({ facts, score, belgium, ...actions }) => {
  return (
    <div>
      <div className="chuck-header">
        <FactsStat title="Facts" count={facts.length} onClick={actions.onClearFacts} />
        {!belgium
          ? <ChuckImage onClick={actions.onAddFact} />
          : <JCVDImage onClick={actions.onAddFact} />}
        <FactsStat title="Score" count={score} />
      </div>
      {facts.map((f) => <Fact key={f.id} text={f.fact} belgium={belgium} />)}
    </div>
  )
}

Chuck.propTypes = {
  facts: React.PropTypes.array,
  score: React.PropTypes.number,
  belgium: React.PropTypes.bool,
  onAddFact: React.PropTypes.func,
  onClearFacts: React.PropTypes.func,
}

Chuck.defaultProps = {
  facts: [],
  score: 0,
}

export default Chuck
