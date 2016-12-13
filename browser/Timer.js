import React from 'react';
import {Link} from 'react-router';

class Timer extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let time = +this.props.interval * (5000);
    console.log("interval time", time)

    window.setInterval(function(){
      //notification code goes here
      Notification.requestPermission().then(function(result) {
        console.log('firing notification');
        // const createNotification = () => {
          const title = "Get up!";

          const onClickHandler = () => {
            console.log("clicked the notification");
            window.open('https://www.washingtonpost.com/apps/g/page/national/the-health-hazards-of-sitting/750/', '_blank');
          }

          const options = {
            body: "Sitting too long can cause oragan damage, such as heart disease :\(\n\nClick here for some stretches you can do at your desk!",
            icon: "http://www.freeiconspng.com/uploads/exercise-icon-1.png"
          }

          const notify = new Notification(title, options);
          notify.onclick = onClickHandler;

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
