import React from 'react';
import './currency.css'
import CurrencyItem from './CurrencyItem';

function Currency() {
  return (
    <div className='currency'>
        <CurrencyItem/>
        <CurrencyItem/>
        <CurrencyItem/>
    </div>
  )
}

export default Currency