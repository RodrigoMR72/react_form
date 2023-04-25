import React from 'react'

export const LabelForm = (props) => {
  return (

    <label 
    htmlFor={props.name.toLowerCase()} 
    className='form-label'
    >
        {props.name}
    </ label>

  )
}