import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './home'
import Create from './new-heads'
import { fetchAllHeads } from '../api'
import { Provider } from 'react-redux'





function App () {

  // const [heads, setHeads] = useState()


  // useEffect(() => {
  //   getAllHeads()
  
  // }, [])

  // const getAllHeads = () => {
  //   return fetchAllHeads()
  //   .then(heads => 
  //     setHeads(heads)
  //     )
  // }

  return (


<div>


  <Switch>


   <Route path="/create" component={Create}>
    </Route>

    <Route path="/">

      <Home/> 

    </Route>



  </Switch>

  </div> 
   
  )

}

export default App
