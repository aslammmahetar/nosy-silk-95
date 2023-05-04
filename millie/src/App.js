import './App.css';
import Classes from './Pages/Classes';
import { ChakraProvider } from '@chakra-ui/react';
// import { app } from './FireBase/fireBase';
// import { getDatabase } from 'firebase/database'
import { BrowserRouter } from 'react-router-dom';

// console.log(app)

// const db = getDatabase(app)
// console.log(db)

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ChakraProvider>
          <Classes />
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
