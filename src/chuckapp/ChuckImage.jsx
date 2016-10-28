import React from 'react'

import imgUrl from './assets/chuck.jpg'

const ChuckFace = ({ ...rest }) => (
  <div {...rest}>
    <img src={imgUrl} alt="chuck" />
  </div>
)

export default ChuckFace
