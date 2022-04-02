import React from 'react'
import AddCurrency from '../AddCurrency/AddCurrency'
import Currency from '../Currency/Currency';
import './newly.css'

function NewlyCurrency() {
  return (
    <div className='currency-wrapper'>
        <Currency/>
        <AddCurrency/>
    </div>
  )
}

export default NewlyCurrency