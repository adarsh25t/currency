import React, { useEffect, useState } from 'react'

function SearchCurrency({search}) {

  return (
    <div className='search'>
        <input type="text" onChange={(event)=>search(event.target.value)}/>
    </div>
  )
}

export default SearchCurrency