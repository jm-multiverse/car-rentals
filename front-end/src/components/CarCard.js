import Card from 'react-bootstrap/Card'
import { currencyFormatter } from '../utils'
import { useCars } from '../contexts/CarsContext'

// Random car images -
import carImage1 from '../car-photos-thumbnails/thumbnail-1.jpg'
import carImage2 from '../car-photos-thumbnails/thumbnail-2.jpg'
import carImage3 from '../car-photos-thumbnails/thumbnail-3.jpg'
import carImage4 from '../car-photos-thumbnails/thumbnail-4.jpg'
import carImage5 from '../car-photos-thumbnails/thumbnail-5.jpg'
import carImage6 from '../car-photos-thumbnails/thumbnail-6.jpg'
import carImage7 from '../car-photos-thumbnails/thumbnail-7.jpg'
import carImage8 from '../car-photos-thumbnails/thumbnail-8.jpg'
import carImage9 from '../car-photos-thumbnails/thumbnail-9.jpg'
import carImage10 from '../car-photos-thumbnails/thumbnail-10.jpg'

export default function CarCard({
  carId,
  onViewCarClick,
  randomImageNumber,
}) {
  const { getCar } = useCars()
  const { make, model, manufacturingYear, color, capacity, transmission, fuelType, carType, pricePerDay, imageUrl } = getCar(carId)

  // Random car image
  const randomImages = [carImage1, carImage2, carImage3, carImage4, carImage5, carImage6, carImage7, carImage8, carImage9, carImage10,]

  const carImage = randomImages[randomImageNumber]

  return (
    <Card className='car-card' onClick={onViewCarClick}>
      <Card.Body>
        <Card.Title>
          <div className='d-flex justify-content-between'>
            <div>
              <div className='fw-bold'>{make} {model}</div>
              <img src={carImage} alt={`${make} ${model}`} className='car-card-image w-50' />
            </div>
            <div className='text-end'>
              <div className='fw-bold'>{currencyFormatter.format(pricePerDay)}</div>
              <div className='text-muted'>per day</div>
            </div>
          </div>
        </Card.Title>
        <Card.Text>
          <div className='d-flex justify-content-between'>
            <div>
              <div className='text-muted'>Year</div>
              <div>{manufacturingYear}</div>
            </div>
            <div>
              <div className='text-muted'>Capacity</div>
              <div>{capacity}</div>
            </div>
            <div>
              <div className='text-muted'>Transmission</div>
              <div>{transmission}</div>
            </div>
            <div>
              <div className='text-muted'>Fuel</div>
              <div>{fuelType}</div>
            </div>
            <div>
              <div className='text-muted'>Type</div>
              <div>{carType}</div>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
