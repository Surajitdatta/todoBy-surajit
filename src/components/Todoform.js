import React from 'react'
import {useDispatch} from "react-redux"
import { addTodo, removeTodo, editTodo } from './Todoslice'
import { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
const Todoform = () =>{
    const[todo, setTodo] = useState("")
    const [editIndex, setEditIndex] = useState(null);
    const dispatch = useDispatch()
    //subscribing
    const items = useSelector((store)=>store.todo.lists)
    
    const handleTodo =()=>{
        if (editIndex !== null) {
          dispatch(editTodo({ index: editIndex, updatedTodo: todo }));
          setEditIndex(null);
        } else {
          dispatch(addTodo(todo));
        }
        setTodo("");
    }
    const taskHandler=(e)=>{
        setTodo(e.target.value)
    }
    const remove =(index)=>{
        dispatch(removeTodo(index))
    }
    const edit =(index)=>{
        setTodo(items[index])
        setEditIndex(index)
    }
    useEffect(() => {
        console.log(items);
    }, [items]);
    return (
        <div className='mainTodo'>
          <div className='inputDiv'>
            <input type="text" placeholder='enter your name' value={todo} onChange={taskHandler}/>
            <button onClick={handleTodo} className='add'>ADD</button><br/>

          </div>
          
          {
            items.map((val, index)=>{
                return(
                    // <div className="task">
                    //   <div className='val'>
                    //     <p>{val}</p>
                    //   </div>
                    //   <div>
                    //     <button onClick={()=>remove(index)}>Remove</button>
                    //     <button onClick={()=>edit(index)}>Edit</button>
                    //   </div>
                    // </div>
                    <>
                      <div className='task'>
                        <div className='val'>
                          <p>{val}</p>
                        </div>
                        <div className='btnGroup'>
                           <button onClick={()=>remove(index)} className='remove'>Remove</button>
                           <button onClick={()=>edit(index)} className='edit'>Edit</button>
                         </div>
                       

                      </div>
                    </>
                )
            })
          }
          
        </div>
    )
}
export default Todoform;