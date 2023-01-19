import './paging-buttons-component.css'

import React, { useContext } from 'react'
import { MainContext } from '../../main-context/main-context-component.jsx'

export const PagingButtons = ({ length, handlePrewPage, handleNextPage }) => {
  const { fromToPaging } = useContext(MainContext)

  return (
    <div className='paging-buttons-container'>
      {fromToPaging.from > 0 && <input className='left-prev' type='button' value={'⬅ prev '} onClick={handlePrewPage} />}
      {fromToPaging.to <= length - (length % 10) && <input className='right-next' type='button' value={'next ➡'} onClick={handleNextPage} />}
    </div>
  )
}
