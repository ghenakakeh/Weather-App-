import React from 'react'

const FormInput = (props) => {
  return (
    <form onSubmit={props.showResult}>
      <input type='text' name='city' placeholder='your city ...'/>
      <input type='text' name='country' placeholder='your country ...' />
      <button>Show</button>
    </form>
  )
}

export default FormInput
