import React from 'react'
import classes from './Bar.module.css'

export default function Bar(props) {
  return (
    <div className={classes.Bar}>
        <div className={classes.Price}>{props.totalPrice}</div>
        <button className={classes.Btn}>結帳</button>
    </div>
  )
}
