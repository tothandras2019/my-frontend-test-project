import React, { Fragment } from 'react'
import './gender-option-component.css'

export const GenderOption = ({ handler }) => {
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
