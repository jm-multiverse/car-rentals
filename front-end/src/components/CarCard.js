import Card from 'react-bootstrap/Card'
import { currencyFormatter } from '../utils'
import { useCars } from '../contexts/CarsContext'

export default function CarCard({
  carId,
  onViewCarClick,
}) {
  const { getCar } = useCars()
  const { make, model, color, image, pricePerDay, description } = getCar(carId)

  return (
    <Card className='car-card' onClick={onViewCarClick}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-3'>
          <div className="me-2">{make} {model}</div>
          <div className="d-flex align-items-baseline fw-normal">
            {currencyFormatter.format(pricePerDay)}
          </div>
        </Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
