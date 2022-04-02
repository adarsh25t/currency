import { display } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideAdd } from '../../Store/ShowAddCurrency';
import { AllCurrency } from '../../Store/ShowAllCurrency';
import './newitem.css'

function NewItem() {

  const [list,setList] = useState();
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();

  async function allCurrency(){
    setLoading(true)
    const API_URl = "https://data.messari.io/api/v1/assets?fields=id,slug,symbol,name,metrics/market_data/price_usd,metrics/market_data/percent_change_usd_last_24_hours";
    let response = await fetch(API_URl);
    let Data = await response.json();
    setList(Data.data);
    setLoading(false);
  }

  useEffect(()=>{

    allCurrency();

  },[])

 const addHandler = (item)=>{
    dispatch(AllCurrency(item));
    console.log(item);
    //dispatch(hideAdd(false))
 }
 

  return (
    <div>
      {!loading && list.map((item,index)=>{
          if(index <7){
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
          )}
    })}
    </div>
  )
}

export default NewItem