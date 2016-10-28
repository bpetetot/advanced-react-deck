import React from 'react'

const Fact = ({ text, belgium, ...rest }) => (
  <div {...rest}>
    {!belgium ? text : text.replace('Chuck Norris', 'JCVD')}
  </div>
)

Fact.propTypes = {
  text: React.PropTypes.string,
  belgium: React.PropTypes.bool,
}

Fact.defaultProps = {
  text: 'No facts',
}

export default Fact
