package com.jmantello.backend.entities

import jakarta.persistence.*

class CarEntity(
    @Id @GeneratedValue val id: Long? = null,
    var make: String,
    var model: String,
    var year: Int,
    var color: String,
    var seats: Int,
    var transmission: String,
    var fuelType: String,
    var pricePerDay: Double,
    var available: Boolean,
    var imageUrl: String,
) {

}