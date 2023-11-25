import React from 'react'
import './details.css'

const Details = ({ searchQuery, data }) => {
  const filterByName = (person) => {
    console.log(person.Name, searchQuery)
    return person.Name.toLowerCase().includes(searchQuery.toLowerCase())
  }

  const renderPerson = (person) => {
    if (!person) {
      console.error('Person is undefined or null')
      return null
    }

    // Your rendering logic goes here
    return (
      <div key={person.id} className="detail">
        <p>Name: {person.Name}</p>
        <p>Spouse: {person.Spouse}</p>
        <p>Birth Year: {person['Birth Year']}</p>
        <p>Location: {person.Location}</p>
      </div>
    )
  }

  console.log(data ? data : '', data && data.Spouse)
  return (
    <div className="detailsContainer">
      <h2 className="heading">Family Details</h2>
      {data ? (
        <div>
          {Object.values(data.children).map((parent) => (
            <div key={parent.id}>
              {renderPerson(parent)}

              {parent.children &&
                Object.values(parent.children)
                  .filter(filterByName)
                  .map(renderPerson)}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Details
