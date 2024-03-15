import { useState } from "react";
import TodoContainer from "./component/TodoContainer";
import tododata from "./data/tododata";


function App() {
  const [datastodo,setTodoData]=useState(tododata)

  const addformdata=(inpdata)=>{
    setTodoData([...datastodo,{
      ...inpdata,
      id:datastodo.length+1
    }])

  }


  const handleDelete=(id)=>{
    setTodoData(datastodo.filter((val)=>val.id!==id))

  }
  return (
    <>
    <TodoContainer datastodo={datastodo} addformdata={addformdata} handleDelete={handleDelete}/>
    
    
  
    
    </>
  );
}

export default App;
