import React, { useContext, useState } from 'react'
import BackDrop from '../UI/BackDrop/BackDrop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import classes from './CartDetail.module.css'
import CartContext from '../../store/cart-context'
import Meal from '../Meals/Meal/Meal'
import Confirm from '../UI/Confirm/Confirm'

export default function () {
    const ctx = useContext(CartContext)
    const [showConfirm, setshowConfirm] = useState(false)
    const confirmHandler = ()=>{
      setshowConfirm(true);
    }
    const onOk = ()=>{
      ctx.cancelconfirmHandler()
    }

    const onNo = (e)=>{
        e.stopPropagation();
        setshowConfirm(false)
    }
  return (
    <BackDrop  onClick={onNo}>
        {showConfirm && <Confirm ConfirmText={'確認清空購物車嗎'}
                                 onOk={onOk}
                                 onNo={onNo}/>}
        <div className={classes.CartDetail}
             onClick = {e=>e.stopPropagation()}>
          <header className={classes.Header}>
                <h2 className={classes.Title}>購物車詳情</h2>
            <div className={classes.Remove}
                   onClick={confirmHandler}>
                <FontAwesomeIcon icon={faTrash}/>
                <span>清空購物車</span>
            </div>
          </header>

            <div className={classes.MealList}>
                {/*noDesc是從Meal導過來的屬性,因為加到購物車內的商品不用有詳情*/}
                {ctx.items.map(item=><Meal noDesc  key={item.id} meal={item}/>)}
            </div>
        </div>
    </BackDrop>
  )
}
