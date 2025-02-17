// Styling
// http://localhost:3000/isolated/final/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({className='', size, style, ...rest})=>{
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div 
    className={`box ${className} ${sizeClassName}`} 
    style={{fontStyle: 'italic', ...style}} 
    {...rest}
    />
    )
}
  

function App() {
  return (
    <div>
       <Box size = "small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size = "medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size = "large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
