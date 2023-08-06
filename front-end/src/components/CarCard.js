export default function CarCard(
  name,
  description,
  price,
  onViewCarClick,
) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
          {price}
        </Card.Text>
        <Button variant="primary" onClick={onViewCarClick}>View Car</Button>
      </Card.Body>
    </Card>
  )
}
