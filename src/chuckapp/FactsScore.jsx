import React from 'react'

const FactsScore = ({ score, ...rest }) => (
  <div {...rest}>
    <div>Score</div>
    <div>{score}</div>
  </div>
)

FactsScore.propTypes = {
  score: React.PropTypes.number,
}

FactsScore.defaultProps = {
  score: 0,
}

export default FactsScore
