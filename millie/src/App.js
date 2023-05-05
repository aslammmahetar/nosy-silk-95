import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
