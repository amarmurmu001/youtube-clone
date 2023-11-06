import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div className="navbar">
    <div className="logo">Youtube</div>
    <div className="searchBar">
      <input type="search" name="search" id="search" placeholder="Search" />
      <button id="searchBtn" type="submit">Search</button>
    </div>
    <div className="sign_in">
      sign in
    </div>
  </div>
  )
}

export default NavBar