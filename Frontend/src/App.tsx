import './App.css';
import { Route, Routes } from 'react-router-dom';
import VakanPage from './pages/VakanPage';
import MainPage from './pages/MainPage';
import MyInput from './components/UI/MyInput';
import MyButton from './components/UI/MyButton';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import NavBar from './components/navigation/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CreatePage from './pages/CreatePage';

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const url = 'http://localhost:5001/api/auth/current'
    axios.get(url, {withCredentials: true}).then((resp) => {
      const allResponses = resp.data
      console.log(resp.data)
      setUser(allResponses)
    }).catch(error => console.log(error))
  }, [setUser])
  
  return (
    <div>
      <NavBar user={user}/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/vakansia/:id' element={<VakanPage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/profile' element={<ProfilePage user={user}/>} />
        <Route path='/create' element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
