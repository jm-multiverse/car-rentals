import React, { useContext, useEffect, useState } from "react"
import carData from "./carData.json" // Mock data, not from API

const CarsContext = React.createContext()

export function useCars() {
  return useContext(CarsContext)
}

export const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState([]) // Mock data - const [cars, setCars] = useState(carData)

  useEffect(() => {
    fetch('http://localhost:8080/api/car')
      .then(res => res.json())
      .then(data => {
        setCars(data)
      })
  }, [])

  function getCar(id) {
    return cars.find(car => car.id === id)
  }

  function addCar(id) {
  }

  function deleteCar({ id }) {
  }

  return <CarsContext.Provider value={{
    cars,
    getCar,
  }} >
    {children}
  </CarsContext.Provider>
}