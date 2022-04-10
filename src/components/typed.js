import React from 'react'
import Typical from 'react-typical'

class Typed extends React.Component {
  render () {
    return (
      <Typical
        steps={['Manuel Beledo', 1000, 'Software Developer', 1000]}
        loop={Infinity}
        wrapper="span"
      />
    )
  }
}

export default Typed;



