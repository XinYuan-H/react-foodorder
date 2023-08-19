import React, { useState } from 'react'
import Meals from './component/Meals/Meals'
import CartContext from './store/cart-context'
import FilterMeals from './component/FilterMeals/FilterMeals'
import Cart from './component/Cart/Cart'
import BackDrop from './component/UI/BackDrop/BackDrop'

/*Build Foodlist data*/
const MEALS_DATA =
[
  {
    id:"01",
    title:'培根起司潛艇堡',
    desc:'現烤麵包搭配嚴選培根，一口咬下，香濃的起司味使你欲罷不能',
    img:'/img/01.png',
    price:'90'
  },
  {
    id:"02",
    title:'三倍起司潛艇堡',
    desc:'現烤麵包與三倍起司的香濃滋味,你絕不能錯過',
    img:'/img/02.png',
    price:'80'
  },
  {
    id:"03",
    title:'南洋風味潛艇堡',
    desc:'挑選南洋蔬菜搭配番茄,獨特的香味是你健康的好選擇',
    img:'/img/03.png',
    price:'90'

  },
  {
    id:"04",
    title:'三倍起司洋蔥潛艇堡',
    desc:'現烤麵包與三倍起司,加上大量洋蔥點綴出的香濃滋味,你絕不能錯過',
    img:'/img/04.png',
    price:'90'
  },
  {
    id:"05",
    title:'厚切牛肉潛艇堡',
    desc:'特選現切澳洲穀飼牛,專屬於喜愛重口味的你',
    img:'/img/05.png',
    price:'120'
  },
  {
    id:"06",
    title:'番茄火腿潛艇堡',
    desc:'現烤麵包與百搭火腿,新鮮番茄,是實在的好選擇',
    img:'/img/06.png',
    price:'90'
  },
  {
    id:"07",
    title:'濃厚起司番茄潛艇堡',
    desc:'風味衝擊的濃厚起司與番茄的絕妙搭配,你一定要試試看',
    img:'/img/07.png',
    price:'90'
  },
]



export default function App() {

  const [cartData,setCartData] = useState(
    {
      items:[],
      totalAmount:0,
      totalPrice:0
    })


  const addMealHandler = (meal)=>{
    const newCart = {...cartData}

    if(newCart.items.indexOf(meal) === -1){
      newCart.items.push(meal);

      meal.amount = 1;
    }else{
      meal.amount += 1;
    }

    newCart.totalAmount += 1;

    newCart.totalPrice += +meal.price;
   
    setCartData(newCart);
  } 

  const subMealHandler = (meal)=>{
    const newCart = {...cartData}

    meal.amount -= 1;

    if(meal.amount === 0){
      newCart.items.splice(newCart.items.indexOf(meal),1)
    }

    newCart.totalAmount -= 1;

    newCart.totalPrice -= meal.price;
   
    setCartData(newCart);
    
  } 

  const cancelconfirmHandler = ()=>{
       
       const newCart = {...cartData};
       newCart.items.forEach(item =>
        delete item.amount);
       newCart.items = [];
       newCart.totalAmount = 0;
       newCart.totalPrice = 0;
       setCartData(newCart)
  }
  


  const [mealsData,usemealsData] = useState(MEALS_DATA);

  const newFilterHandler = (keyword)=>{
    const newFilterMeals = MEALS_DATA.filter(item=>item.title.indexOf(keyword) !== -1)
    usemealsData(newFilterMeals);
  }
  

  return (
    <CartContext.Provider value={{...cartData,addMealHandler,subMealHandler,cancelconfirmHandler}}>
    


      <div>
          <FilterMeals
           onFilter = {newFilterHandler}/>
          <Meals mealsData={mealsData}/>
          <Cart/>
          
      </div>


    </CartContext.Provider>
  )
}
