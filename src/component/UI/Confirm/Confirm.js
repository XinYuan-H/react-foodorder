import React from 'react'
import BackDrop from '../BackDrop/BackDrop'
import classes from './Confirm.module.css'

export default function Confirm(props) {
  return (
    <BackDrop className={classes.ConfirmOuter}>
        <div className={classes.Confirm}>
            <p className={classes.ConfirmText}>{props.ConfirmText}</p>
            <div>
                <button className={classes.No}
                        onClick={(e)=>{props.onNo(e)}}>取消</button>
                <button className={classes.Ok}
                        onClick={(e)=>{props.onOk(e)}}>確認</button>
            </div>
        </div>
    </BackDrop>
  )
}
