import React from 'react'
import "./styles.css"

const Card = ({id="CAM-1",title="Update User Profile Page UI",tag = ["Feature request"],userId,status,priority,users}) => {
  return (
    <div className='card'>
        <div className='profileDiv'>
            <div className='profileIcon'>AG</div>
        </div>
        <div className='idDiv'>
            {id}
        </div>
        <div className='titleDiv'>
            {title}
        </div>
        <div className='bottomDiv'>
            <div className='statusDiv'><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-160v-240h120v240H200Zm240 0v-440h120v440H440Zm240 0v-640h120v640H680Z"/></svg></div>
            <div className='tagDiv'>
                <div className='circle'></div>
                <p>{tag[0]}</p>
            </div>
        </div>
        
    </div>
  )
}

export default Card