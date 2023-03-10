
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Movielist from './movies/MovieList';
import Streamingfilm from './movies/Streamingfilm';
 
function App() {

  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route path='/home' element={<Movielist />}> </Route>
          <Route path='/Streaming/:name' element={<Streamingfilm />}> </Route>
          
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
