import React from 'react'
import Header from 'javascripts/header'
import Footer from 'javascripts/footer'

import 'stylesheets/modules/container'

const Container = React.createClass({
  render () {
    return (
      <div className='container'>
        <Header />
        <Footer />
      </div>
    )
  }
})

export default Container
