import React from 'react'
import './TodoContainer.css'
import TodoForm from './TodoForm'
import ToDo from './ToDo'

const TodoContainer = ({datastodo,addformdata,handleDelete}) => {
  return (
    <>
    <h1 style={{textAlign:'center',fontWeight:'bold',textTransform:'uppercase'}}>To Do List</h1>
    <div className='container cont'>
        <div className='row'>
            <div className='col'>
              {/* todo Form */}
              <TodoForm addformdata={addformdata}/>
              {/* map call a function for each array element and pss the data to another comp by using props  */}
              {
                datastodo.map((val)=>
                <ToDo
                key={val.id}
                id={val.id}
                email={val.email}
                mobile={val.mobile}
                handleDelete={handleDelete}
                />
                )
              }

            </div>

        </div>

    </div>
    
    </>
  )
}

export default TodoContainer