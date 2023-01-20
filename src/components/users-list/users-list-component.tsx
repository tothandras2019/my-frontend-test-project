import React, { useContext, useEffect, useState } from 'react'
import { FilteredOnePageData } from '../../customFunctions/paging-function'
import { ResultsType, UsersType } from '../../DATA/data-types'
import { MainContext } from '../../main-context/main-context-component'
import { PagingButtons } from '../paging-buttons/paging-buttons-component'
import './users-list-component.css'

type UsersListType = { users: ResultsType[] }
export const UsersList = ({ users: usersList }: UsersListType) => {
  //#region VALUES AND HOOKS
  const RESULT_IN_ONE_PAGE = 10

  const { fromToPaging, SetFromToPaging } = useContext(MainContext)

  const [pageUserContent, SetPageUserContent] = useState<ResultsType[] | []>([])
  const [filterPageResultNumber, SetFetchPageResultNumber] = useState(0)

  //#endregion
  //#region USE_EFFECTS

  /**Initial setting when usersList change */
  useEffect(() => {
    const userLength = usersList.length
    if (userLength < 0) return
    SetFetchPageResultNumber(userLength)
    UserPageing()
  }, [usersList])

  /**Set fromToPaging when paging change */
  useEffect(() => {
    UserPageing()
  }, [fromToPaging])

  const UserPageing = () => {
    const from = fromToPaging.from
    const to = fromToPaging.to
    const filtered = FilteredOnePageData(from, to, usersList)
    SetPageUserContent(filtered)
  }

  //#endregion
  //#region HANDLERS

  /**FOC manage NEXT button press */
  const handleNextPage = () => {
    const from = fromToPaging.from + RESULT_IN_ONE_PAGE
    const to = fromToPaging.to + RESULT_IN_ONE_PAGE
    SetFromToPaging((state) => ({
      ...state,
      from: from,
      to: to > usersList.length ? usersList.length : to,
    }))
  }
  /**FOC manage PREVIOUS button press */
  const handlePrewPage = () => {
    const from = fromToPaging.from - RESULT_IN_ONE_PAGE
    const to = from + RESULT_IN_ONE_PAGE
    SetFromToPaging((state) => ({
      ...state,
      from: from < 0 ? 0 : from,
      to: from < 0 ? RESULT_IN_ONE_PAGE : to,
    }))
  }

  //#endregion
  //#region RENDERING
  return (
    <div className='users-list-table'>
      <div className='users-list-contents'>
        <div className='user-row column-head'>
          <p>{'#'}</p>
          <p>{'gender'}</p>
          <p>{`Name`}</p>
          <p>{`postcode`}</p>
        </div>
        {pageUserContent.map((user, index) => {
          const { gender, name, location } = user
          const { first, last, title } = name
          const { postcode } = location
          return (
            <div key={`user_${first}_${last}`} className='user-row'>
              <p>{index + fromToPaging.from + 1}</p>
              <p key={`users_${index}`}>{gender}</p>
              <p>{`${title} ${first} ${last}`}</p>
              <p>{`${postcode}`}</p>
            </div>
          )
        })}
      </div>
      {filterPageResultNumber > RESULT_IN_ONE_PAGE && (
        <PagingButtons length={pageUserContent.length} handlePrewPage={handlePrewPage} handleNextPage={handleNextPage} />
      )}
    </div>
  )
  //#endregion
}
