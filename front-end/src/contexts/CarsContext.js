import React, { useContext, useState } from "react"
import { v4 as uuidV4 } from 'uuid'
import useLocalStorage from "../hooks/useLocalStorage"
import carData from "./carData.json"

const CarsContext = React.createContext()

export function useCars() {
  return useContext(CarsContext)
}

export const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState(carData)

  console.log(cars)

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