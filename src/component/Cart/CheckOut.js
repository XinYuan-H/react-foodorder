import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import classes from './CheckOut.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../store/cart-context'
import CheckOutItem from './CheckOutItem'
import Bar from './Bar'

const checkOut = document.getElementById('checkout-root')


export default function CheckOut(props) {
    const hide = ()=>{
        props.onClose();
    }

    const ctx = useContext(CartContext)
  return ReactDOM.createPortal(
        <div className={classes.CheckOutBox}>
            <div className={classes.Xmark}>
                <FontAwesomeIcon icon={faXmark}
                 onClick = {hide}/>
            </div>


            <div className={classes.MealDesc}>
                <header className={classes.Header}>
                    <h1>餐品詳情</h1>
                </header>

                <div className={classes.MealList}>
                    {ctx.items.map(item => <CheckOutItem key={item.id}meal={item}/>)}
                </div>


                <footer className={classes.Footer}>
                    <p className={classes.TotalPrice}>
                    {ctx.totalPrice}
                    </p>
                </footer>

                <Bar totalPrice={ctx.totalPrice}/>
            </div>
        </div>
 ,checkOut)
}
