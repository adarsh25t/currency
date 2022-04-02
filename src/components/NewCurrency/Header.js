import React from 'react';
import { useDispatch } from 'react-redux';
import { hideAdd } from '../../Store/ShowAddCurrency';
import './newCurrency.css'

function Header({isShow,title}) {

    const dispatch = useDispatch();

    const hideHandler = ()=>{
        dispatch(hideAdd())
    }

    return (
        <div className='add_header'>
            <h3>{title}</h3>
            {isShow ? <i class="fas fa-times" onClick={hideHandler}></i> : ""}
        </div>
    )
}

export default Header