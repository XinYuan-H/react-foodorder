import React, { useContext,useEffect,useState } from 'react'
import classes from './Cart.module.css'
import cart from '../asset/購物車.png'
import CartContext from '../../store/cart-context'
import CartDetail from './CartDetail'
import CheckOut from './CheckOut'

export default function Cart() {
    const ctx = useContext(CartContext)
    const [showDetail,setshowDetail] = useState(false)
    
    const [showCheckOut,setshowCheckOut] = useState(false)

    useEffect(()=>{
      if(ctx.totalAmount === 0){
        setshowDetail(false)
        setshowCheckOut(false)
    }
    },[ctx])
    const showdetailHandler = ()=>{
        if(ctx.totalAmount === 0)  return
        setshowDetail(prevState => !prevState);
    }

    const showchectoutHandler = ()=>{
      if(ctx.totalAmount ===0 ) return
        setshowCheckOut(true)
    }

    const closeHandler = ()=>{
      setshowCheckOut(false)
    }
     

    
    

  return (


    <div className={classes.Cart} onClick = {showdetailHandler}>
        {showCheckOut && <CheckOut onClose={closeHandler}/>}
        {showDetail && <CartDetail/>}
        
        <div className={classes.Icon}>
            <img src={cart} alt=''/>
            {ctx.totalAmount === 0?null:
            <span className={classes.TotalAmount}>{ctx.totalAmount}</span>}
        </div>
        {ctx.totalAmount === 0?<p className={classes.noMeal}>尚未選購任何商品</p>:
        <p className={classes.Price}>{ctx.totalPrice}</p>}
        <button className={`${classes.Button} ${ctx.totalAmount === 0?classes.noMealBtn:''}`}
                onClick={showchectoutHandler}>去結算</button>

    </div>
  )

 
}
