import React from 'react'
import './ToDo.css'

const ToDo = ({ id, email, mobile,handleDelete }) => {
  return (
    <>
      <div className='data_contianer'>

        <p>{email}</p>
        <p>{mobile}</p>

        <button className='btn btn-warning' onClick={()=>handleDelete(id)}>X</button>


      </div>


    </>
  )
}

export default ToDo