import React from 'react'

const DataOutput = (props) => {
  return (
    <div className='info'>
              
     {
            props.temp && 
             <p className='info-key'> temprature :
              <span className='info-value'>{props.temp}</span>
              </p>   
     }
      {
            props.city &&   
            <p className='info-key'>City :
              <span className='info-value'>{props.city}</span>
              </p>  
     }
      {
            props.country &&  
            <p className='info-key'>Country: 
            <span className='info-value'> {props.country}</span>
              </p>  
     }
      {
            props.humidity && 
             <p className='info-key'>Humidity : 
              <span className='info-value'> {props.humidity} </span>
             </p> 
     }
      {
            props.description &&  
            <p className='info-key'>Description :
              <span className='info-value'>  {props.description}</span>
              </p>
     }
      {
            props.error &&  
            <p className='in'>Description :
             
              <span className='info-value'> {props.error} </span>
              </p>
     }

          
           
           
          



      
      

    </div>
  )
}

export default DataOutput
