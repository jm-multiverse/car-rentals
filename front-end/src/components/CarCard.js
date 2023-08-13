import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { currencyFormatter } from '../utils'
import { useCars } from '../contexts/CarsContext'

export default function CarCard({
  carId,
  onViewCarClick,
}) {
  const { getCar, getRandomCarThumbnail } = useCars()
  const { make, model, manufacturingYear, color, capacity, transmission, fuelType, carType, pricePerDay, imageUrl } = getCar(carId)


  return (
    <Card className='p-4' onClick={onViewCarClick}>
      <div className='d-flex flex-column'>
        <div className='d-flex justify-content-between align-items-baseline'>
          <h3 className='fw-normal mb-0'>{make} {model}</h3>
          <div className='text-end no-wrap'>
            <h5 className='fw-normal mb-0'>{currencyFormatter.format(pricePerDay)}</h5>
            <div className='text-muted'>per day</div>
          </div>
        </div>
        <div className="container-sm d-flex justify-content-center">
          <img src={getRandomCarThumbnail()} alt={`${make} ${model}`}
            className='w-50'
          />
        </div>
      </div>
      <hr />
      <div className='d-flex flex-column'>
        <div className='d-flex justify-content-between flex-grow-1 me-4'>
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
      </div>
    </Card>
  )
}
