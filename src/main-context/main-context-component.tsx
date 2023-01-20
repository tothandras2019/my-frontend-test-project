import { JwkKeyExportOptions } from 'crypto'
import React, { createContext, SetStateAction, useState, Dispatch } from 'react'
import { InitPaging } from './initial-objects/paging-object'

/**Set up Dispatch type for SetFromToPaging */
type SetFromToPagingDispatchType = Dispatch<SetStateAction<typeof InitPaging>>
export const MainContext = createContext<{ fromToPaging: typeof InitPaging; SetFromToPaging: SetFromToPagingDispatchType }>({
  fromToPaging: InitPaging,
  SetFromToPaging: () => {},
})

/**Main Context provide global variable for the App */
export const MainContextProvider = ({ children }: { children: any }): JSX.Element => {
  const [fromToPaging, SetFromToPaging] = useState(InitPaging)

  return <MainContext.Provider value={{ fromToPaging, SetFromToPaging }}>{children}</MainContext.Provider>
}
