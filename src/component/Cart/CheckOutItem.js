import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import classes from './CheckOutItem.module.css'
import Counter from '../UI/Counter/Counter'


export default function CheckOutItem(props) {
     const ctx = useContext(CartContext)
  return (
    <div className={classes.ItemBox}>
        <div className={classes.Img}>
            <img src={props.meal.img} alt='?'/>
        </div>

        <div className={classes.Desc}>
            <h2 className={classes.Title}>{props.meal.title}</h2>
            <div className={classes.PriceOuter}>
                <Counter meal={props.meal} />
                <div className={classes.Price}>{props.meal.price*props.meal.amount}</div>
            </div>
        </div>
    </div>
  )
}
