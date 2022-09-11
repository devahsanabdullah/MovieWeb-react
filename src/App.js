import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import SingleMovie from './component/SingleMovie';
import Error from './component/Error';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Movie from './component/Movie';

function App() {
  return (
   <>
  
   <BrowserRouter>
   <Routes>
  <Route path="/" element={<Home />} />
  <Route path="movie/:id" element={<SingleMovie />} />
  <Route path="*" element={<Error />} />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
