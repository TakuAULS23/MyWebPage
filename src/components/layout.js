import React, {Fragment} from 'react'
import Header from './header'

export default ({ children }) => (
  <Fragment>
    <Header />
      { children }
  </Fragment>
)
