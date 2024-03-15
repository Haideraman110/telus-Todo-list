import React, { useState } from 'react'
import './TodoForm.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TodoForm = ({ addformdata }) => {
  const initialvalue = {
    email: '',
    mobile: ''
  }
  const errorinitial = {
    email: '',
    mobile: ''
  }
  const [formdata, setFormData] = useState(initialvalue)
  const [errors, setErrors] = useState(errorinitial)

  const handleChange = (e) => {
    setFormData({
      ...formdata,                  //copy prev object using spread op and assign value to the the particular field
      [e.target.name]: e.target.value

    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formdata.email || !formdata.email.includes('@')) {
      setErrors({
        ...errors,
        email: 'Please Enter the Valid Email'

      })
      return
    }
    if (!formdata.mobile || formdata.mobile.length !== 10) {
      setErrors({
        ...errors,
        mobile: 'Please Enter valid 10 digit number'

      })
      return
    }
    addformdata(formdata)   //lifting state up
    setFormData(initialvalue)   //reset the form 
    setErrors(errorinitial)    //reset the error after submit


  }
  return (
    <>
      {/* <Box
        component="form"
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
        noValidate
        autoComplete="off"
      >
        <form >
          <TextField
          margin="dense"
            fullWidth
            id="fullWidth"
            label="Email"
            type="email"
            name='email'
            value={formdata.email}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
          margin="dense"
            fullWidth
            id="fullWidth"
            label="Mobile No"
            name='mobile'
            value={formdata.mobile}
            onChange={handleChange}
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button onSubmit={handleSubmit} fullWidth variant="contained" style={{backgroundColor:'pink'}}>Add</Button>

        </form>


      </Box> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor='email' className='form-label'>Email</label>
        <input type='email' className='form-control' name='email' value={formdata.email} onChange={handleChange} placeholder='Enter your email' />

        {errors.email ? <p style={{ color: 'red' }}>{errors.email}</p> : ''}

        <label htmlFor='mobile' className='form-label'>Mobile No</label>
        <input type='text' id='mobile' className='form-control' name='mobile' value={formdata.mobile} onChange={handleChange} placeholder='Mobile' />

        {errors.mobile ? <p style={{ color: 'red' }}>{errors.mobile}</p> : ''}

        <button type='btn' className='btn btn-danger my-3 w-100'>Add</button>
      </form>

    </>
  )
}

export default TodoForm