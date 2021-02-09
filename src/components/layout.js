import React, {Fragment} from 'react'
import Header from './header'
import './reset.module.css'

export default ({ children }) => (
  <Fragment>
    <Header />
      { children }
  </Fragment>
)
