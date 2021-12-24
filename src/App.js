import SearchBar from './components/SearchBar'
import WeatherForecast from './components/WeatherForecast'
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap'

function App() {
  const [location, setLocation] = useState('hanoi')
  const [forecast, setForecast] = useState({})
  const [loading, setLoading] = useState(true)
  const api = {
    key: "bcd861c928dc7164de4c1e3eb4f8a67d",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  const handleSearch = loc => {
    setLocation(loc)
    // setLoading(true)
    // setTimeout(() => {
    //   setLoading(false)
    // }, 500)
  }

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${api.base}weather?q=${location}&appid=${api.key}`,
      data: null
    }).then(res => {
      // handle success
      setForecast(res.data)
      // --- set loading ---
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 400)
    }).catch(error => {
      // handle error
      alert('Invalid Location')
    });
  }, [location])

  return (
    <div className="App">
      <header className="App-header">
        <p className='title'>Weather <b>Forecast</b></p>
        <div className="form">
          <SearchBar
            onHandle={handleSearch}
            location={location}
          />
          {
            loading ?
              (<div className='loading'><ReactBootstrap.Spinner animation="border" /></div>) :
              Object.keys(forecast).length !== 0 && <WeatherForecast forecast={forecast} location={location} />
          }
        </div>
      </header>
    </div>
  );
}

export default App;
