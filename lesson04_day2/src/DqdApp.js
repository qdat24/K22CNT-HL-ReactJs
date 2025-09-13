import React, { Component } from 'react';
import DqdEventComp from './components/DqdEventComp';
import DqdEventCompClass from './components/DqdEventCompClass';
import DqdEventForm1 from './components/DqdEventForm1';
import DqdEventForm2 from './components/DqdEventForm2';

class DqdApp extends Component {
  render() {
    return (
       <div className='container border'>
          <h1 className='text-center'> Đinh Quốc Đạt <br/>ReactJs - Form - Event</h1>
          <hr/>

          <DqdEventComp />

          <DqdEventCompClass />

          <DqdEventForm1 />

          <DqdEventForm2 />
      </div>
    );
  }
}

export default DqdApp;