import React from 'react'
import { Triple } from 'react-preloading-component';

const Loading = () => {
  return (
    <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '-9em',
        marginLeft: '-15em',
        width: '30em',
        height: '18em'
    }}>
      <Triple color="#0099ff"/>
    </div>
  )
}

export default Loading;