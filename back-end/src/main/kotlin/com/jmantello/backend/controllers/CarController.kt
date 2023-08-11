package com.jmantello.backend.controllers

import com.jmantello.backend.entities.CarEntity
import com.jmantello.backend.services.CarService
import io.micrometer.core.instrument.Counter
import io.micrometer.core.instrument.MeterRegistry
import io.micrometer.core.instrument.Timer
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/car")
class CarController(
    private val service: CarService,
    private val meterRegistry: MeterRegistry)
{
    val requestsCount: Counter = Counter.builder("requests.count")
        .tag("controller", "car")
        .register(meterRegistry)

    val requestsProcessingTime: Timer = Timer.builder("requests.processing.time")
        .tag("controller", "car")
        .register(meterRegistry)

    @GetMapping
    fun getCars(): ResponseEntity<Any> =
        ResponseEntity.ok(service.getCars())

    @GetMapping("/{id}")
    fun getCarById(@PathVariable id: Long): ResponseEntity<Any> {
        val car = service.getCarById(id)
            ?: return ResponseEntity.status(404).body("Car with id $id not found.")

        return ResponseEntity.ok(car)
    }

    @PostMapping
    fun createRecipe(@RequestBody car: CarEntity): ResponseEntity<Any> =
        ResponseEntity.status(201).body(service.createCar(car))

    @PutMapping
    fun updateRecipe(@RequestBody car: CarEntity): ResponseEntity<Any> =
        ResponseEntity.ok(service.updateCar(car))

    @DeleteMapping("/{id}")
    fun deleteRecipe(@PathVariable id: Long): ResponseEntity<Any> =
        ResponseEntity.ok(service.deleteCar(id))


}