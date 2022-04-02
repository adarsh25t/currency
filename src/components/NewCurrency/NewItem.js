import React from 'react';
import './newitem.css'

function NewItem() {
  return (
    <div>
        <div className="add_item">
            <div className='add_left'>
              <h5>name</h5>
              <span>BTC</span>
            </div>
            <div className="add_right">
                <button><i class="fas fa-plus"></i></button>
            </div>
        </div>
    </div>
  )
}

export default NewItem