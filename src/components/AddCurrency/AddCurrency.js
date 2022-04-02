import React from 'react';
import { useDispatch } from 'react-redux';
import { showAdd } from '../../Store/ShowAddCurrency';
import './addcurrency.css';


function AddCurrency() {

  const dispatch = useDispatch();

  const ShowHandler = ()=>{
    dispatch(showAdd())
  }

  return (
    <div>
        <button onClick={ShowHandler} className="add-new">
            <i class="fas fa-plus"></i>
            Add a Cryptocurrency
        </button>
    </div>
  )
}

export default AddCurrency