import './paging-buttons-component.css'

import React, { useContext } from 'react'
import { MainContext } from '../../main-context/main-context-component'

type PagingButtonsType = { length: number; handlePrewPage: () => void; handleNextPage: () => void }
export const PagingButtons = ({ length, handlePrewPage, handleNextPage }: PagingButtonsType): JSX.Element => {
  const { fromToPaging } = useContext(MainContext)

  return (
    <div className='paging-buttons-container'>
      {fromToPaging.from > 0 && <input className='left-prev' type='button' value={'⬅ prev '} onClick={handlePrewPage} />}
      {fromToPaging.to <= length - (length % 10) && <input className='right-next' type='button' value={'next ➡'} onClick={handleNextPage} />}
    </div>
  )
}
