import React, { useContext } from 'react'
import classes from './Counter.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import {faMinus} from '@fortawesome/free-solid-svg-icons'
import Meal from '../../Meals/Meal/Meal'
import CartContext from '../../../store/cart-context'

/*fontawesome
    npm i --save @fortawesome/fontawesome-svg-core

    npm i --save @fortawesome/free-solid-svg-icons
    npm i --save @fortawesome/free-regular-svg-icons

    npm i --save @fortawesome/react-fontawesome@latest

*/
export default function Counter(props) {

  const ctx = useContext(CartContext);
  const clickAdd = ()=>{
    //  props.onAdd(props.meal)
     ctx.addMealHandler(props.meal);
  }
  const clickSub = ()=>{
    // props.onSub(props.meal)
    ctx.subMealHandler(props.meal);
 }
  return (
    <div className={classes.CountBox}>
        
        {
          (props.meal.amount && props.meal.amount !== 0)?
          <>
              <button className={classes.Sub}
                      onClick={clickSub}>
                  <FontAwesomeIcon icon={faMinus}/>
              </button>
              <span className={classes.Count}>{props.meal.amount}</span>
          </>:null
        }
        
        <button className={classes.Add}
                onClick={clickAdd}>
            <FontAwesomeIcon icon={faPlus}/>
        </button>
    </div>
  )
}
