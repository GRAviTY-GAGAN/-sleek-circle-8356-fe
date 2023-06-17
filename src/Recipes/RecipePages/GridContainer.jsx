import React, { useState } from 'react';
import { GridCard } from './GridCard';
import "./GridContainer.css"
import { Grid } from '@chakra-ui/react';

export const GridContainer = ({data, title}) => {
  const [arr] = useState(data)

  return (
    <div className='main_cont'>
      <div className='p_card'>
        <p>{title}</p>
      </div>
      <Grid className='grid_card'>
        {arr.length > 0 && arr.map((el,i)=> {
          return <GridCard key={i} {...el}/>
        })}
        </Grid>
    </div>
  )
}