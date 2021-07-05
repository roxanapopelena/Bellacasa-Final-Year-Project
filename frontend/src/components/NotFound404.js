import React from 'react'

import './assets/styles/NotFound404.css'


class NotFound404 extends React.Component {
    render() {
      return (
        <div className="mainbox">
          <div className='404'></div>
    <div className="err">4</div>
    <i className="far fa-question-circle fa-spin"></i>
    <div className="err2">4</div>
    <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
    <p>Let's go <a href="/">home</a> and try from there.</p>
    </div>
      </div>
      )
    }    
   }
   export default NotFound404;