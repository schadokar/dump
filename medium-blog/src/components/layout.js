import React from 'react'
import PropTypes from 'prop-types'
import Navigation from './navigation'

import './layout.css'

const Layout = ({ children }) => (
  <main>
    <Navigation />
    {children}
  </main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
