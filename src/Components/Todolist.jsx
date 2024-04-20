/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import './Todolist.css'
import { motion } from "framer-motion";
import { fadeIn } from '../variants';
function Todolist() { 

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos")) 
      setTodos(todos)
    }
  }, [])
  

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }
  
  


  const handleEdit = (e, id)=>{ 
    let t = todos.filter(i=>i.id === id) 
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    }); 
    setTodos(newTodos) 
    saveToLS()
  }

  const handleDelete= (e, id)=>{  
    let newTodos = todos.filter(item=>{
      return item.id!==id
    }); 
    setTodos(newTodos) 
    saveToLS()
  }

  const handleAdd= ()=>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("") 
    saveToLS()
  }
  
  const handleChange= (e)=>{ 
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => { 
    let id = e.target.name;  
    let index = todos.findIndex(item=>{
      return item.id === id;
    }) 
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }
  

  return (
    < >
       <div className=" todo-container">
          <div className="tolist">

        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
        className='headtodo'>Todo-List</motion.h1>
         <motion.div 
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4}}
         className="addTodo ">
          <h2 className='heading'>Add a Todo</h2>
          <motion.div 
            
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
          className="input-box ">

          <motion.input variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }} onChange={handleChange} value={todo} type="text" className='input-todo ' />
          <motion.button 
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          onClick={handleAdd} disabled={todo.length<=3} className='save-btn'>Save</motion.button>
          </motion.div>
         </motion.div>
         <div className="showfinbox">

         <input className=' check-fin ' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} /> 
         <motion.label 
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
         className='showFin' htmlFor="show">Show Finished</motion.label> 
         </div>
         <div className=''></div>
         <motion.h2 
         variants={fadeIn("right", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.9 }}
         className='added-todos '>Your Todos</motion.h2>
         <div className="todos">
          {todos.length ===0 && <div className=''>No Todos to display</div> }
          {todos.map(item=>{
 
          return (showFinished || !item.isCompleted) && <div key={item.id} className={"todo flex my-3 justify-between"}>
            <div className='showTodo '> 
            <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            </div>
            <div className="todo-buttons">
              <button onClick={(e)=>handleEdit(e, item.id)} className=' edit-button'><FaEdit /></button>
              <button onClick={(e)=>{handleDelete(e, item.id)}} className='delete-button '><AiFillDelete /></button>
            </div> 
          </div>
          })}
         </div>
         </div>

       </div>
    </>
  )
}

export default Todolist;