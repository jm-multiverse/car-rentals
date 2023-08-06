import React, { useContext, useState } from "react"
import { v4 as uuidV4 } from 'uuid'
import useLocalStorage from "../hooks/useLocalStorage"

const CarsContext = React.createContext()

export function useCars() {
  return useContext(CarsContext)
}

export const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState([
    {
      id: uuidV4(),
      name: 'Toyota Corolla',
      description: 'A nice car',
      price: 100,
    },
    {
      id: uuidV4(),
      name: 'Honda Civic',
      description: 'A nice car',
      price: 100,
    },
    {
      id: uuidV4(),
      name: 'Ford Focus',
      description: 'A nice car',
      price: 100,
    },
    {
      id: uuidV4(),
      name: 'Nissan Sentra',
      description: 'A nice car',
      price: 100,
    },
    {
      id: uuidV4(),
      name: 'Hyundai Elantra',
      description: 'A nice car',
      price: 100,
    },
    {
      id: uuidV4(),
      name: 'Chevrolet Cruze',
      description: 'A nice car',
      price: 100,
    },
    {
      id: uuidV4(),
      name: 'Kia Forte',
      description: 'A nice car',
      price: 100,
    },
    {
      id: uuidV4(),
      name: 'Volkswagen Jetta',
      description: 'A nice car',
      price: 100,
    },
    {
      id: uuidV4(),
      name: 'Mazda 3',
      description: 'A nice car',
      price: 100,
    },
    {
      id: uuidV4(),
      name: 'Subaru Impreza',
      description: 'A nice car',
      price: 100,
    },
  ]) // Default car data


  function getCar(id) {
  }

  function addCar(id) {
  }

  function deleteCar({ id }) {
  }

  return <CarsContext.Provider value={{
    cars,
  }} >
    {children}
  </CarsContext.Provider>
}