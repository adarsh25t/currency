import React from 'react'
import { useSelector } from 'react-redux';
import AddCurrency from '../AddCurrency/AddCurrency'
import Currency from '../Currency/Currency';
import './newly.css'

function NewlyCurrency() {

  const state = useSelector((state)=>{
    console.log(state);
  })

  return (
    <div className='currency-wrapper'>
        <Currency/>
        <AddCurrency/>
    </div>
  )
}

export default NewlyCurrency