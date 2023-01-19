import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.scss'
import { MainContextProvider } from './main-context/main-context-component.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <MainContextProvider>
    <App />
  </MainContextProvider>,
)

function TestFunction() {
  const [data, setData] = useState()
}
