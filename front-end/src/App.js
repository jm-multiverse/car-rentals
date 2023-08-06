import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import SearchBar from "./components/SearchBar";

function App() {
  return (<>
    <Container className="my-4">
      <Stack direction='horizontal' gap='2' className='mb-4'>
        <h1 className='me-auto'>Car Rentals</h1>
      </Stack>
      <SearchBar />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 1fr)',
          gap: '1rem',
          alignItems: 'flex-start'
        }}
      >
        {/* Car Cards List */}
      </div>
    </Container>

  </>);
}

export default App;
