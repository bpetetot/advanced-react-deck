import React from 'react'

const FactsCounter = ({ count, ...rest }) => (
  <div {...rest}>
    <div>Facts</div>
    <div>{count}</div>
  </div>
)

FactsCounter.propTypes = {
  count: React.PropTypes.number,
}

FactsCounter.defaultProps = {
  count: 0,
}

export default FactsCounter
