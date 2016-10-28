import React from 'react'

const FactsStat = ({ title, count, ...rest }) => (
  <div {...rest}>
    <div>{title}</div>
    <div>{count}</div>
  </div>
)

FactsStat.propTypes = {
  title: React.PropTypes.string,
  count: React.PropTypes.number,
}

FactsStat.defaultProps = {
  count: 0,
}

export default FactsStat
