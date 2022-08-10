// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({size, className = '', style, ...otherProps}) => {
  const sizeClassName = size ? `box--${size}` : ''
  const classes = ['box', sizeClassName, className]

  const styles = {
    fontStyle: 'italics',
    ...style,
  }

  return (
    <div style={styles} className={classes.join(' ').trim()} {...otherProps} />
  )
}

const smallBox = (
  <Box style={{backgroundColor: 'lightblue'}} size="small" className="hi">
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box style={{backgroundColor: 'pink'}} size="medium">
    medium pink box
  </Box>
)
const largeBox = (
  <Box style={{backgroundColor: 'orange'}} size="large">
    large orange box
  </Box>
)

const unstyledBox = <Box>unstyled box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      {unstyledBox}
    </div>
  )
}

export default App
