/* eslint-disable react/prop-types */

import { useState } from "react"

function List(props) {
    const {el, index, deleteObj, updateObj} = props

    const [isEdit,setIsEdit] = useState(false)
    const [input,setInput] = useState(el.title)
    const [isDone,setIsDone] = useState(false)

    const edit = () =>{
        if(isEdit){
            updateObj(input,el.id)
        }
        setIsEdit(!isEdit)
    }

    const done = () =>{
        setIsDone(!isDone)
        console.log(isDone);
    }

  return (
    <div className="flex mx-auto w-3/4 justify-between my-4">
        <div>
            { isEdit
                ? <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                :isDone
                ?<p onClick={done} className="bg-white ">{index+1} . {el.title}</p> 
                :<p onClick={done} className="line-through">{index+1} . {el.title}</p> 
            }
        </div>

        <div>
            {
                isEdit
                ?<button className='btn btn-accent items'onClick={edit}>Confirm</button>
                :<button className='btn btn-neutral items'onClick={edit} disabled={isDone ?false :true}>Edit</button>
            } 
            <button className='btn btn-error items' onClick={()=>deleteObj(el.id)}> Del</button>
        </div>
        
    </div>
  )
}

export default List

