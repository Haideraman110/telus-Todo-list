import React from 'react'
import './ToDo.css'
import Icon from '@mui/material/Icon';

const ToDo = ({ id, email, mobile, handleDelete }) => {
  return (
    <>
      <div className='data_contianer'>

        <p>{email}</p>
        <p>{mobile}</p>

       <Icon ><span className="material-icons-outlined" onClick={() => handleDelete(id)}>
          delete
        </span></Icon>


      </div>


    </>
  )
}

export default ToDo