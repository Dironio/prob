import './App.css';
import { Route, Routes } from 'react-router-dom';
import VakanPage from './pages/VakanPage';
import MainPage from './pages/MainPage';
import MyInput from './components/UI/MyInput';
import MyButton from './components/UI/MyButton';


function App() {
  return (
    <div>
            <MyInput type='text'/>
            <MyButton>Искать cum</MyButton>
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/vakansia' element={<VakanPage/>}/>
    </Routes>
    </div>
  );
}


export default App;
