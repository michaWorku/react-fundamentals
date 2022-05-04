// Styling
// http://localhost:3000/isolated/final/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({className, style, ...rest})=>(
<div className={`box ${className}`} style={{fontStyle: 'italic', ...style}} {...rest}/>
)

function App() {
  return (
    <div>
       <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
