import React from 'react';
import {Link, hashHistory} from 'react-router';

class Homepage extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log("E.TARGET.TIME.VALUE", e.target.time.value)
    this.props.setTime(e.target.time.value);
    hashHistory.push('/timer');
  }

  render () {
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
          <input type="radio" name="time" value="1"/> Every Hour <br/>
          <input type="radio" name="time" value="2"/> Two Hours<br/>
          <input type="radio" name="time" value="3"/> Three Hours<br/>
          <input type="submit"/>
       </form>
      </div>
    )
  }
}

export default Homepage;
