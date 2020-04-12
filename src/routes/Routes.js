import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainContainer from 'components/MainContainer'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainContainer} />
      <Route exact path="/ar" component={MainContainer} />
    </Switch>
  )
}

export default Routes
