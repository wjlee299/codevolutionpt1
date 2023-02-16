import React from 'react'

function MapTest() {

  const testArr = [
    {
      name: "Amy",
      age: 23,
      gender: "female"
    },
    {
      name: "John",
      age: 25,
      gender: "male"
    },
    {
      name: "Ben",
      age: 27,
      gender: "male"
    }
  ]

  const filteredArr = testArr.filter(person => person.gender === "male")

  return (
    <>
      <ul>
        {testArr.map((person, index) => <li key={index}>Name: {person.name} | Age: {person.age}</li>)}
      </ul>
      <h3>filtered</h3>
      <ul>
        {filteredArr.map((person, index) => <li key={index}>Name: {person.name} | Gender: {person.gender}</li>)}
      </ul>
    </>
  )
}

export default MapTest