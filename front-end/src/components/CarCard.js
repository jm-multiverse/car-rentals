import Card from 'react-bootstrap/Card'
import { currencyFormatter } from '../utils'

export default function CarCard({
  name,
  description,
  price,
  onViewCarClick,
}) {
  return (
    <Card className='car-card' onClick={onViewCarClick}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-3'>
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline fw-normal">
            {currencyFormatter.format(price)}
          </div>
        </Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
