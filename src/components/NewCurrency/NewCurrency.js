import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import './newCurrency.css'
import NewItem from './NewItem';

function NewCurrency() {



  return (
    <div className='new-currency'>
        <Header/>
        <NewItem/>
    </div>
  )
}

export default NewCurrency