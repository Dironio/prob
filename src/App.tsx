import './App.css';
import { Route, Routes } from 'react-router-dom';
import VakanPage from './pages/VakanPage';
import MainPage from './pages/MainPage';
import MyInput from './components/UI/MyInput';
import MyButton from './components/UI/MyButton';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import NavBar from './components/navigation/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/vakansia/:id' element={<VakanPage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
