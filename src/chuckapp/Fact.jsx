import React from 'react'

const Fact = ({ text, ...rest }) => (
  <div {...rest}>
    {text}
  </div>
)

Fact.propTypes = {
  text: React.PropTypes.string,
}

Fact.defaultProps = {
  text: 'No facts',
}

export default Fact
