import React from 'react'
import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice'

const Symbols = () => {
    const currentDisplay = useSelector(selectDisplay)
  return (
    <div className='symbols'>
        <div className='stack'>
            <h2>Flag of {currentDisplay.name.common}: </h2>
            <img src={currentDisplay.flags.png}/>
        </div>
        <div className='stack'>
        <h2>Coat of arms of {currentDisplay.name.common}: </h2>
            <img src={currentDisplay.coatOfArms.png}/>
        </div>
    </div>
  )
}

export default Symbols