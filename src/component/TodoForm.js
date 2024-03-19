import React, { useState } from 'react'
import './TodoForm.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TodoForm = ({ addformdata, datastodo }) => {
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

    const formerros = {}

    if (!formdata.email) {
      formerros.email = 'Email is Required'             //adding email property to formerrors Object
    }
    else if (!formdata.email.includes('@')) {
      formerros.email = 'Please Enter a Valid Email'
    }
    else {
      formerros.email = ''
    }


    if (!formdata.mobile) {
      formerros.mobile = 'Mobile number is Required'
    }
    else if (formdata.mobile.length !== 10) {
      formerros.mobile = 'Length should be 10'
    }
    else {
      formerros.mobile = ''
    }


    //checking duplicacy input data 
    if (datastodo.some((val) => val.email === formdata.email || datastodo.some((val) => val.mobile === formdata.mobile))) {
      alert('data is already present')
      setFormData(initialvalue)
    }
    else {
        addformdata(formdata)   //lifting state up
        setFormData(initialvalue)   //reset the form

    }

    setErrors(formerros)    //passing error object to the state


  }
  return (
    <>
      <Box
        style={{ backgroundColor: 'white' }}
        clone
        component="form"
        sx={{
          width: '100%',
          maxWidth: '100%',
          p: 1,
          mb: 2
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          className='textfield'
          margin="dense"
          fullWidth
          id="email"
          label="Email"
          placeholder='Enter Your Email'
          type="email"
          name="email"
          value={formdata.email}
          variant='filled'
          onChange={handleChange}
          InputLabelProps={{
            style: { fontSize: 14 },
            shrink: true,
          }}
          error={errors.email !== ''}
          helperText={errors.email}
        />
        <TextField
          className='textfield'
          margin="dense"
          fullWidth
          id="mobile"
          label="Mobile No"
          variant='filled'
          placeholder='Enter Your Mobile No'
          name="mobile"
          value={formdata.mobile}
          onChange={handleChange}
          type="text"
          InputLabelProps={{
            style: { fontSize: 14 },
            shrink: true,
          }}
          error={errors.mobile !== ''}
          helperText={errors.mobile}
        />
        <Button sx={{ p: 1, fontSize: '1.4rem', fontWeight: 'bold' }} type="submit" fullWidth variant="contained" color='primary' >Add</Button>
      </Box>

      {/* <form onSubmit={handleSubmit}>
        <label htmlFor='email' className='form-label'>Email</label>
        <input type='email' className='form-control' name='email' value={formdata.email} onChange={handleChange} placeholder='Enter your email' />

        {errors.email ? <p style={{ color: 'red' }}>{errors.email}</p> : ''}

        <label htmlFor='mobile' className='form-label'>Mobile No</label>
        <input type='text' id='mobile' className='form-control' name='mobile' value={formdata.mobile} onChange={handleChange} placeholder='Mobile' />

        {errors.mobile ? <p style={{ color: 'red' }}>{errors.mobile}</p> : ''}

        <button type='btn' className='btn btn-danger my-3 w-100'>Add</button>
      </form> */}

    </>
  )
}

export default TodoForm