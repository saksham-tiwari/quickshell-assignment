import React, { useState } from 'react'

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <div className='dropdown' onClick={()=>setIsOpen(prev=>!prev)}>
            Display 
        </div>
        {isOpen && 
        <div className='dropdownMenu'>
            <div className='dropdownItem'>
                <p>Grouping</p>
                <select>
                    <option>Status</option>
                </select>
            </div>
            <div className='dropdownItem'>
                <p>Ordering</p>
                <select>
                    <option>Priority</option>
                </select>
            </div>
        </div>}
    </>
  )
}

export default Dropdown