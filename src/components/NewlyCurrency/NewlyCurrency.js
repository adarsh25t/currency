import React from 'react'
import { useSelector } from 'react-redux';
import AddCurrency from '../AddCurrency/AddCurrency'
import Currency from '../Currency/Currency';
import Header from '../NewCurrency/Header';
import './newly.css'

function NewlyCurrency() {

  return (
    <div className='currency-wrapper'>
        <Header title={'Currency App'} isShow={false}/>
        <Currency/>
        <AddCurrency/>
    </div>
  )
}

export default NewlyCurrency