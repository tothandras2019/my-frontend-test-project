import React, { useContext, useEffect, useState } from 'react'
import { IsPrimNumber } from '../../customFunctions/isPrim-function.js'
import { AbortFetchRequest, useFetch } from '../../customFunctions/use-fetch-component.js'
import { InitPaging } from '../../main-context/initial-objects/paging-object'
import { MainContext } from '../../main-context/main-context-component.jsx'
import { GenderOption } from '../gender-option/gender-option-component.jsx'
import { NameInput } from '../name-input/name-input-component.jsx'
import { UsersList } from '../users-list/users-list-component.jsx'
import urlJson from './../../settings/url.json'
import './dashboard-component.css'

export const Dashboard = () => {
  //#region VALUES AND HOOKS
  const { fromToPaging, SetFromToPaging } = useContext(MainContext)

  const [fetch, SetFetch] = useFetch(null)
  const [fetchData, SetFetchData] = useState([])
  const [filteredGender, SetFilteredGender] = useState([])
  const [zipPrim, setZipPrim] = useState([])

  //#endregion
  //#region USE_EFFECTS

  useEffect(() => {
    const url = `${urlJson.url}${urlJson.param}${urlJson.numResults}`
    SetFetch(url)
  }, [])

  useEffect(() => {
    if (!fetch.results) return
    const responseData = fetch.results
    SetFetchData((state) => responseData)
  }, [fetch])

  useEffect(() => {
    const filteredForZip = fetchData.filter((user) => IsPrimNumber(user.location.postcode.toString()))

    setZipPrim(filteredForZip)
  }, [fetchData])

  //#endregion
  //#region HANDLERS

  const handleGenderChange = (event) => {
    const target = event.target
    const genderValue = target.value

    const filtered = zipPrim.filter((user) => user.gender === genderValue)

    SetFromToPaging(InitPaging)
    SetFilteredGender(() => filtered)
  }
  //#endregion
  //#region RENDERING

  return (
    <main>
      <nav>
        <h1> Frontend test task</h1>
        <h3>(Filtered for at least 2 prim numbers in postcode)</h3>
      </nav>
      <div className='options-container'>
        <GenderOption handler={handleGenderChange} />
      </div>
      {<UsersList users={filteredGender.length > 0 ? filteredGender : zipPrim} />}
    </main>
  )
  //#endregion
}
