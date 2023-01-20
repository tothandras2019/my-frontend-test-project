import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.scss'
import { MainContextProvider } from './main-context/main-context-component'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <MainContextProvider>
    <App />
  </MainContextProvider>,
)
