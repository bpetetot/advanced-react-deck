import React from 'react'

import imgUrl from './assets/jcvd.jpg'

const JCVDFace = ({ ...rest }) => (
  <div {...rest}>
    <img src={imgUrl} alt="jcvd" />
  </div>
)

export default JCVDFace
