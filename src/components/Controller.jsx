import React from 'react'
import './controller.css'
import Button from './Button'

const Controller = ({ importJson, setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }
  return (
    <div className="controllerContainer">
      <h2 className="heading">Family Tree</h2>
      <div className="searchContainer">
        <input
          type="text"
          name="search"
          className="search"
          placeholder="Search Family Member"
          onChange={handleSearchChange}
        />
      </div>
      <div className="btnContainer">
        <Button>ADD FAMILY</Button>
        <Button>PRIENT FAMILY TREE</Button>
        <Button onClick={importJson}>IMPORT JSON</Button>
        <Button>EXPORT JSON</Button>
      </div>
    </div>
  )
}

export default Controller
