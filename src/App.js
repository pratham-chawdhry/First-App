import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState('dark');
  const [TextForm1, setTextForm] = useState({
    color: 'black',
    backgroundColor: 'white',
  })

  const [About1, setAbout] = useState({
    color: 'black',
    backgroundColor: 'white',
  })

  const toggleMode = (color) => {
    if (color === 'dark') {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#042743';
      setTextForm({
        color: 'white',
        backgroundColor: '#042743'
      })

      setAbout({
        color: 'white',
        backgroundColor: 'black'
      })
    } 
    else if (color === 'light') {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      setTextForm({
        color: 'black',
        backgroundColor: 'white'
      })

      setAbout({
        color: 'black',
        backgroundColor: 'white'
      })
    }
    else if (color === 'blue') {
      setDarkMode('primary');
      document.body.style.backgroundColor = '#270340';
      setTextForm({
        color: 'white',
        backgroundColor: '#270340'
      })

      setAbout({
        color: 'white',
        backgroundColor: '#4022dd'
      })
    }
    else if (color === 'red') {
      setDarkMode('danger');
      document.body.style.backgroundColor = '#CAE05C';
      setTextForm({
        color: 'white',
        backgroundColor: '#CAE05C'
      })

      setAbout({
        color: 'white',
        backgroundColor: '#dc3545'
      })
    }
    else if (color === 'green') {
      setDarkMode('success');
      document.body.style.backgroundColor = '#D3B02C';
      setTextForm({
        color: 'white',
        backgroundColor: '#D3B02C'
      })

      setAbout({
        color: 'white',
        backgroundColor: '#28a745'
      })
    }

    showAlert(`${color} mode has been enabled`, "success");
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }) 
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <BrowserRouter>
    <>
      <Navbar title ="TextUtils" aboutText="About TextUtils" mode ={darkMode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
       
          {/* <Routes>
            <Route path="/about" element={<About myStyle = {About1}/>}/>
          </Routes> */}
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" myStyle={TextForm1} />}/>
          </Routes>
       
      </div>
    </>
    </BrowserRouter>
  );
}

export default App;
