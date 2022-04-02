import { display } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideAdd } from '../../Store/ShowAddCurrency';
import { AllCurrency } from '../../Store/ShowAllCurrency';
import './newitem.css'

function NewItem({list,loading}) {

  const dispatch = useDispatch();

  const addHandler = (item)=>{
      dispatch(AllCurrency(item));
      dispatch(hideAdd(false))
  }

  return (
    <div className='all_currency'>
      {!loading && list.map((item,index)=>{
          return(
            <div className="add_item" key={index}>
              <div className='add_left'>
                <h5>{item.name}</h5>
                <span>{item.symbol}</span>
              </div>
              <div className="add_right">
                <button onClick={()=>addHandler(item)}><i class="fas fa-plus"></i></button>
              </div>
            </div>
      )})}
    </div>
  )
}

export default NewItem