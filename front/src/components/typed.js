import React from 'react'
import Typical from 'react-typical'

class Typed extends React.Component {
  render () {
    return (
      <Typical
        steps={['Work Ethic', 1000, 'Commitment', 1000, 'Passion', 1000]}
        loop={Infinity}
        wrapper="span"
      />
    )
  }
}

export default Typed;



