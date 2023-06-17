import React, { useState } from 'react';
import { GridCard } from './GridCard';
import "./GridContainer.css"

export const GridContainer = ({data, title}) => {
  const [arr] = useState(data)

  return (
    <div>
      <div className='p_card'>
        <p>{title}</p>
      </div>
      <div className='grid_card'>
        {arr.length > 0 && arr.map((el,i)=> {
          return <GridCard key={i} {...el}/>
        })}
        </div>
    </div>
  )
}