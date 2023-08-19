import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './FilterMeals.module.css'

export default function FilterMeals(props) {

    const filterHandler = (e)=>{
        const keyword = e.target.value.trim()
        props.onFilter(keyword);
    }

  return (
    <div className={classes.FilterMeals}>
        <div className={classes.SearchOuter}>
            <FontAwesomeIcon icon={faSearch}
                   className={classes.SearchIcon}/>
            <input type='text' placeholder='請輸入關鍵字'
                   className={classes.SearchInput}
                   onChange={filterHandler}/>
        </div>
    </div>
  )
}
