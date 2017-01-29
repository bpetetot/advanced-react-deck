import React from 'react'
import { Motion, spring } from 'react-motion'

const MotionExample = () =>
  <Motion
    defaultStyle={{ x: 0 }}
    style={{ x: spring(100, { stiffness: 100, damping: 1 }) }}
  >
    {(value) =>
      <div style={{ width: `${value.x}%`, backgroundColor: '#666' }}>
        react-motion
      </div>
    }
  </Motion>

export default MotionExample
