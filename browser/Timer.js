import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import APPID from '../keys/weather-key';

class Timer extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let time = +this.props.interval * (5000) || 10000;

    console.log("interval time", time)

    window.setInterval(function(){
      //notification code goes here
      Notification.requestPermission().then(function(result) {
        console.log('firing notification');

        // const createNotification = () => {
          const title = "Get up!";

          const onClickHandler = () => {
            console.log("clicked the notification");
            window.open('https://www.youtube.com/watch?v=tyDA1myYlIg', '_blank');
          }

          // let lat, lon;

          navigator.geolocation.getCurrentPosition(function(position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${APPID}`;

            console.log('hello', url);

            axios.get(url)
            .then(res => res.data)
            .then(weatherData => {
              console.log('howdy', weatherData)
              let goOutside = false;
              if (weatherData.main.temp - 293.15 > 0) {
                goOutside = true;
              }
              const options = goOutside ? {
                body: "It's nice outside, so get out there and run around!!!",
                icon: "http://www.freeiconspng.com/uploads/exercise-icon-1.png"
              } : {
                body: "It's coldddd outside, but you still need to get movin', so click here for some exercies!",
                icon: "http://www.freeiconspng.com/uploads/exercise-icon-1.png"
              }
              const notify = new Notification(title, options);
              notify.onclick = onClickHandler;
            })
          })

          // const baseURL = 'api.openweathermap.org/data/2.5/';

          // const instance = axios.create({
          //   baseURL: `weather?lat=${lat}&lon=${lon}&APPID=${APPID}`
          // })

        // }
      });


    }, time);
  }

  render () {
    return (
      <div>
        <div className="container">
          <h2 className="landing-text">we're on it! happy browsing :) </h2>
        </div>
      </div>
    )
  }
}

export default Timer;
