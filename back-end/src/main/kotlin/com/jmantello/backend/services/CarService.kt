package com.jmantello.backend.services

import com.jmantello.backend.entities.CarEntity
import com.jmantello.backend.repositories.CarRepository
import org.springframework.data.repository.findByIdOrNull

class CarService(private val repository: CarRepository) {
    fun getCars(): Iterable<CarEntity> = repository.findAll()
    fun getCarById(id: Long): CarEntity? = repository.findByIdOrNull(id)
    fun createCar(car: CarEntity): CarEntity = repository.save(car)
    fun updateCar(car: CarEntity): CarEntity = repository.save(car)
    fun deleteCar(id: Long): Unit = repository.deleteById(id)
}