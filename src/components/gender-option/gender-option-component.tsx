import './gender-option-component.css'
import React, { Fragment, SyntheticEvent } from 'react'

type GenderOptionType = { handler: (event: SyntheticEvent<HTMLSelectElement>) => void }
export const GenderOption = ({ handler }: GenderOptionType): JSX.Element => {
  return (
    <Fragment>
      <label htmlFor='gender-sellection'>Filter gender: </label>
      <select name='gender-sellection' id='select-gender' onChange={handler}>
        <option>show all</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </select>
    </Fragment>
  )
}
