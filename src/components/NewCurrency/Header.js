import React from 'react';
import { useDispatch } from 'react-redux';
import { hideAdd } from '../../Store/ShowAddCurrency';
import './newCurrency.css'

function Header() {

    const dispatch = useDispatch();

    const hideHandler = ()=>{
        dispatch(hideAdd())
    }

    return (
        <div className='add_header'>
            <i class="fas fa-times" onClick={hideHandler}></i>
        </div>
    )
}

export default Header