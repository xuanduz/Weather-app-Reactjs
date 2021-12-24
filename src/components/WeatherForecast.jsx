import './WeatherForecast.css'

const WeatherForecast = (props) => {
  const info = props.forecast
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = new Date();
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];

  return (
    <>
      <div className='wf-container'>
        <div className="wf-left">
          <div className={(parseInt(info.main.temp) - 273) > 20 ? 'img warm' : 'img'} ></div>
          <div className="information">
            <div className='box'>
              <div className="day">{day}</div>
              <div className="date-month">{month} {date}</div>
              <div className="location">
                <i className="fas fa-map-marker-alt"></i>
                <div> {info.name}</div>
              </div>
            </div>
            <div className="temp">{parseInt(info.main.temp) - 273} °C</div>
            <div className="description">{info.weather[0].main}</div>
          </div>
        </div>
        <div className="wf-right">
          <div>
            <div className='wf-right-child'>
              <div>humidity</div>
              <div className='number'>{info.main.humidity}</div>
            </div>
            <div className='wf-right-child'>
              <div>wind speed</div>
              <div className='number'>{info.wind.speed}</div>
            </div>
            <div className='wf-right-child'>
              <div>air pressure</div>
              <div className='number'>{info.main.pressure}</div>
            </div>
            <div className='wf-right-child'>
              <div>clouds</div>
              <div className='number'>{info.clouds.all}</div>
            </div>
            <div className='wf-right-child'>
              <div>max temp</div>
              <div className='number'>{parseInt(info.main.temp_max) - 273} °C</div>
            </div>
            <div className='wf-right-child'>
              <div>min temp</div>
              <div className='number'>{parseInt(info.main.temp_min) - 273} °C</div>
            </div>
            <div className='wf-right-child'>
              <div>feels like</div>
              <div className='number'>{parseInt(info.main.feels_like) - 273} °C</div>
            </div>
            <div className='wish'>Have a good day !</div>
          </div>

        </div>
      </div>
    </>
  )
}

export default WeatherForecast