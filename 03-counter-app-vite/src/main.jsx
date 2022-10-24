// import './styles.css'
// import { FirstApp } from './FirstApp'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value = {100} />
  </React.StrictMode>
)



{/* <FirstApp title={'Hola Soy Goku'}/> */}
// import {App} from './App'
{/* <App title = {'Juan'} subtitle = {1980} /> */}