import React from 'react'
import classes from './Meal.module.css'
import Counter from '../../UI/Counter/Counter'



/**FOOD COMPONENT */
export default function Meal(props) {
  return (
    <div className={classes.Meal}>
        <div className={classes.foodImg}>
           <img src={props.meal.img} alt="安安"/>
        </div>
        <div className={classes.MealBox}>
           {/*這裡的MealBox是為了讓購物車在沒有Desc的情況下撐開*/}
            <h2 className={classes.Title}>{props.meal.title}</h2>
            {props.noDesc?null:<p className={classes.Desc}>{props.meal.desc}</p>}
            

            <div className={classes.PriceWrap}>
                <span className={classes.Price}>{props.meal.price}</span>
                <Counter meal={props.meal}
                         />
            </div>
        </div>
    </div>
  )
}
