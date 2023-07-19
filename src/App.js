import React, { Component } from 'react';
import DataOutput from './commponet/DataOutput/DataOutput'
import FormInput from './commponet/FormIInput/FormInput'

import './App.css';
const API_KEY="910ec7f4bf08dbd23474fca9f92e4198"

class App extends Component {
  state={
    temp:"",
    city:"",
    country:"",
    humidity:"",
    description:"",
    error:""
   

  }
// handle show result 
 showResult=async (e) => {
  e.preventDefault();
const city=e.target.elements.city.value
const country=e.target.elements.country.value


  const api=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=910ec7f4bf08dbd23474fca9f92e4198`);
  const data=await api.json();

      if(city && country){
         this.setState({
         temp:data.main.temp,
         city:data.name,
        country:data.sys.country,
       humidity:data.main.humidity,
       description:data.weather[0].description,
        error:""
  })
    }else{
             this.setState({
              temp:"",
              city:"",
               country:"",
              humidity:"",
              description:"",
              error:"please Enter Data"
  })
}
  
}



  render() {
  
    return (
      <div className="App">
     

    <div className='formContainer'>
    <FormInput showResult={this.showResult}/>

     <DataOutput   temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
          />
      </div>
      </div>

    );
  }
}

export default App;
