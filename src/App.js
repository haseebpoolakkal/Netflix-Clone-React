import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './components/Movie';
import Admin from './pages/Admin';
import Layout from './pages/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'
import NoPage from './pages/NoPage';
import SingleMovie from './pages/SingleMovie';

function App() {
  return (
    <>
      <div className="App-header">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='movie' element={<Movie />} />
            <Route path='admin' element={<Admin />} />
            <Route path='movie/:movieName' element={<SingleMovie />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
