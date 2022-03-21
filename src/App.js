
import './App.css';
import {Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import DashBoard from "./components/DashBoard"
// import DashBorard from './components/DashBorard';

function App() {
  return (
   <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/dashboard" element={<DashBoard />} />
     </Routes>
  );
}

export default App;
