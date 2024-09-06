/* eslint-disable react/prop-types */

import { useState } from "react"
import { toast } from "react-toastify"

function List(props) {
    const {el, index, deleteObj, updateObj} = props

    const [isEdit,setIsEdit] = useState(false)
    const [input,setInput] = useState(el.title)
    const [isDone,setIsDone] = useState(false)

    const edit = () =>{
        if(isEdit){
            updateObj(input,el.id)
            toast.success('Edit Success')
        }
        setIsEdit(!isEdit)
    }

    const done = () =>{
        if(isDone){
            toast.dark('Your Task is not Done')
        }else{
            toast.success('Your Task is Done')
        }
        setIsDone(!isDone)
    }


  return (
    <div className="flex mx-auto w-full justify-between my-4">
        <div>
            { isEdit
                ? <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                :isDone
                ?<p onClick={done} className=" line-through cursor-pointer">{index+1} . {el.title}</p> 
                :<p onClick={done} className="cursor-pointer">{index+1} . {el.title}</p> 
            }
        </div>

        <div className="flex gap-4">
            {
                isEdit
                ?<button className='btn btn-accent items'onClick={edit}>Confirm</button>
                :<button className='btn btn-neutral items'onClick={edit} disabled={isDone ?true :false}>Edit</button>
            } 
            <button className='btn btn-error items' onClick={()=>deleteObj(el.id)}> Del</button>
        </div>
        
    </div>
  )
}

export default List

