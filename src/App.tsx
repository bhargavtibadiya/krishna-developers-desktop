import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Society from './pages/society/Society';
import Layout from './components/Layout';

function App() {
  return (
    <div className='app_container'>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/society' element={<Society />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
