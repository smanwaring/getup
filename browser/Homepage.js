import React from 'react';
import {Link, hashHistory} from 'react-router';

class Homepage extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.setTime(e.target.time.value);
    hashHistory.push('/timer');
  }

  render () {

    return (
      <div>
        <div className="container">
          <img src={"exercise-icon-1.png"} alt="getup" className="icon-stretch" height="200" width="200"/>
          <h2>hello. how often would you like #getup reminders?</h2>

          <form onSubmit={this.handleSubmit}>
            <ul>
            <li>
              <input type="radio" id="f-option" name="time" value="1"/>
              <label htmlFor="f-option">every hour</label>

              <div className="check"></div>
            </li>

            <li>
              <input type="radio" id="s-option" name="time" value="2"/>
              <label htmlFor="s-option">every two hours</label>

              <div className="check"><div className="inside"></div></div>
            </li>

            <li>
              <input type="radio" id="t-option" name="time" value="3"/>
              <label htmlFor="t-option">every three hours</label>

              <div className="check"><div className="inside"></div></div>
            </li>
          </ul>
          <br/>
          <br/>

          <button className="btn waves-effect waves-light button-top" type="submit" name="action">Submit</button>

        </form>

        </div>
      </div>
    )
  }
}

export default Homepage;




