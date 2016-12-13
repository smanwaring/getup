import React from 'react';
import {Link} from 'react-router';

class Timer extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log("INTERVAL", this.props.interval)
    let time = +this.props.interval * (5000);
    
    window.setInterval(function(){
      //notification code goes here
      Notification.requestPermission().then(function(result) {
        console.log(result);
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

    },10000);
  }

  render () {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

export default Timer;