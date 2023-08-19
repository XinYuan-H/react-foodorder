import React from 'react'
import Meal from './Meal/Meal'
import classes from './Meals.module.css'


/** FOOD LIST */
export default function Meals(props) {
  return (

    /*use CSS let roller to Meals not to body*/ 
    <div className={classes.Meals}>
        {props.mealsData.map(item=>
        <Meal key={item.id}
              meal={item}
              />)}
    </div>
  )
}
