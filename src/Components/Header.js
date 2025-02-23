
import React from 'react'
import PropType from 'prop-types'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
// props is a javascript object which we are passsing to the parent component to the child component
// In the app.js we have our parent coponent
export default function Header(props) {
  return (
    <div>
      
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      
    </ul>
    { props.searchBar?  <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> : "No Search Bar "}
  </div>
</nav>
</>

    </div>
  )
}

Header.defaultProps = {
title:"Your Title is Here ",
searchBar:true
}

// It is like default setting 



Header.prototype = {
    title: PropType.string,
    searchBar:PropTypes.bool.isRequired
}

// it is used for detecting the errors correctly
// "isRequired" is very necessary compalsary