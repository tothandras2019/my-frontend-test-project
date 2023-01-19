import React, { createContext, useState } from 'react'
import { InitPaging } from './initial-objects/paging-object.js'

export const MainContext = createContext(InitPaging)

/**Main Context provide global variable for the App */
export const MainContextProvider = ({ children }) => {
  const [fromToPaging, SetFromToPaging] = useState(InitPaging)

  return <MainContext.Provider value={{ fromToPaging, SetFromToPaging }}>{children}</MainContext.Provider>
}
