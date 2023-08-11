import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import SearchBar from "./components/SearchBar";
import CarCard from "./components/CarCard";
import { useCars } from "./contexts/CarsContext";
import { useState } from "react";
import ViewCarModal from "./components/ViewCarModal";

function App() {
  const { cars } = useCars();

  const [showViewCarModal, setShowViewCarModal] = useState(false);
  const [viewCarModalCarId, setViewCarModalCarId] = useState(null);
  function handleViewCarClick(carId) {
    setViewCarModalCarId(carId);
    setShowViewCarModal(true);
  }

  return (<>
    <Container className="my-4">
      <Stack direction='horizontal' gap='2' className='mb-5 justify-content-between align-items-baseline'>
        <h1 className='me-auto'>Car Rentals</h1>
        <SearchBar />
      </Stack>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 1fr)',
          gap: '1rem',
          alignItems: 'flex-start'
        }}
      >
        {/* Car Cards List */}
        {cars.map(car => {
          return (
            <CarCard
              key={car.id}
              carId={car.id}
              onViewCarClick={() => { handleViewCarClick(car.id) }}
            />
          )
        })}
      </div>
    </Container>
    <ViewCarModal
      show={showViewCarModal}
      carId={viewCarModalCarId}
      handleClose={() => { setShowViewCarModal(false) }}
    />
  </>);
}

export default App;
