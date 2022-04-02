import React from 'react'
import { useSelector } from 'react-redux'
import NewCurrency from '../NewCurrency/NewCurrency'
import NewlyCurrency from '../NewlyCurrency/NewlyCurrency'
import './home.css'

function Home() {

  const show = useSelector((state)=>{
    return state.show
  });

  return (
    <div className='home'>
        {show ? <NewCurrency/> : <NewlyCurrency/>}
    </div>
  )
}

export default Home