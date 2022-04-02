import React from 'react'
import AddCurrency from '../AddCurrency/AddCurrency'
import Currency from '../Currency/Currency'
import './home.css'

function Home() {
  return (
    <div className='currency-wrapper'>
        <Currency/>
        <AddCurrency/>
    </div>
  )
}

export default Home