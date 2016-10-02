import React from 'react'

const ChuckFace = ({ url, ...rest }) => (
  <div {...rest}>
    <img src={url} alt="chuck" />
  </div>
)

ChuckFace.propTypes = {
  url: React.PropTypes.node,
}

export default ChuckFace
