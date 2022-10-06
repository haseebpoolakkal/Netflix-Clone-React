import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Admin from './pages/Admin';
import NoPage from './pages/NoPage';
import SelectedMovie from './pages/SelectedMovie';

function App() {
  return (
    <>
      <div className='bg'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/movie/:movieName' element={<SelectedMovie />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
