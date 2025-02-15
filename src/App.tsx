import React from 'react'
import StarRating from './components/star-rating/StarRating'
import Switch from './components/switch/Switch'
import { useState } from 'react'

const App = () => {

  
// For Switch component
  const [isOn, setIsOn] = useState(false)
  const handleClick = () => setIsOn(!isOn)



  return (

   
    <div>
      <StarRating value={3} />
      <Switch isOn={isOn} onToggle={handleClick} />
    </div>
  )
}

export default App