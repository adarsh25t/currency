import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import './newCurrency.css'
import NewItem from './NewItem';
import SearchCurrency from './SearchCurrency';

function NewCurrency() {

  const [list,setList] = useState();
  const [loading,setLoading] = useState(true);
  const [search,setSearch] = useState('')

  async function allCurrency(){
        setLoading(true)
        const API_URl = "https://data.messari.io/api/v1/assets?fields=id,slug,symbol,name,metrics/market_data/price_usd,metrics/market_data/percent_change_usd_last_24_hours";
        let response = await fetch(API_URl);
        let Data = await response.json();
        setList(Data.data);
        setLoading(false);
  }
  function searchHandler(val){
      setSearch(val)
      if(val !== ""){
        let Data = list.filter((item)=>{
            if(item.name.toLowerCase().charAt(0) === search){
              setList(Data);
            }
        })
        
      }
  }
  useEffect(()=>{
    allCurrency();
  },[search])


  return (
    <div className='new-currency'>
        <Header isShow={true}/>
        <SearchCurrency search={searchHandler}/>
        <NewItem list={list} loading={loading}/>
    </div>
  )
}

export default NewCurrency