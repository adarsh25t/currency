import React from 'react';
import { useSelector } from 'react-redux';
import './currency.css'
import CurrencyItem from './CurrencyItem';

function Currency() {

  const Items = useSelector((state)=>{
      return state.currency;
  })

  let Currency = Items.map((item)=>{
      return(
        <CurrencyItem data={item} key={item.id}/>
      )
  })

  return (
    <div className='currency'>
        {Currency.length >0 ? Currency : <h3 className='add_alert'>Add New Currency</h3>} 
    </div>
  )
}

export default Currency