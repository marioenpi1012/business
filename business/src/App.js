import './App.scss';
import {BrowserRouter as Router,Routes, Route, Navigate} from 'react-router-dom'
import Nav from './components/Nav'
import Menu from './components/Menu'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Place from './components/Place'
function App() {
  return (
    <>
      <Router basename='/'>
          <Nav/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/menu' element={<Menu/>} exact/>
          <Route path='/location' element={<Place/>} exact/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
