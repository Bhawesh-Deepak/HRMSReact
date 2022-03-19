import logo from './logo.svg';
import './App.css';
import Header from './HeaderComponent/Header';
import Menu from './MenuComponent/Menu';
import Empdashboard from './BodyComponent/EmpDashboard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Payslip from './PaySlipComponent/PaySlip.js';
import Leave from './LeaveComponent/Leave';
import Footer from './FooterComponent/Footer';
import Authenticate from './AuthenticateComponent/Authenticate';
import { useState } from 'react';
function App() {

  const [isLogged, setIsLogged] = useState(true);
  const [logName, setLogName] = useState('Deepak');

  return (

    <div className="App">
      {

        isLogged ? (<><Header></Header>
          <Menu></Menu>
          <Footer></Footer></>) : (<Authenticate logName={setLogName} />)
      }

    </div>
  );
}

export default App;
