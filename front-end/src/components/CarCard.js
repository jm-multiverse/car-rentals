import Card from 'react-bootstrap/Card'
import { currencyFormatter } from '../utils'
import { useCars } from '../contexts/CarsContext'

export default function CarCard({
  carId,
  onViewCarClick,
}) {
  const { getCar } = useCars()
  const { make, model, manufacturingYear, color, capacity, transmission, fuelType, carType, pricePerDay, imageUrl } = getCar(carId)

  return (
    <Card className='car-card' onClick={onViewCarClick}>
      <Card.Body>
        <Card.Title>
          <div className='d-flex justify-content-between'>
            <div>
              <div className='fw-bold'>{make} {model}</div>
              <div className='text-muted'>{color}</div>
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
