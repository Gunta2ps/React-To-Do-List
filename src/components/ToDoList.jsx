import { useState } from 'react'
import useStore from '../store/data-store'
import { toast } from 'react-toastify'
import List from './List'

function ToDoList() {
    
    const [text,setText] = useState('')

    const{arrObj, addObj, removeObj,updateObj} = useStore((item) =>({
        arrObj : item.arrObj,
        addObj : item.addObj,
        removeObj : item.removeObj,
        updateObj: item.updateObj,
    }))

    const changeText = e =>{
        setText(e.target.value)
    }

    const click = () => {
        addObj(text)
        toast.success('Add List success')
    }

    const deleteObj = (id) => {
        removeObj(id)
        toast.error('Delete success')
    }

    return (
        <div className='bg-blue-400 h-[95vh]'>
            <h1 className='text-4xl font-bold text-center'>To-Do List</h1>
            <div className='flex justify-center'>
                <input className='input input-bordered w-full max-w-xs mt-10' 
                type="text" onChange={changeText} />
                <button className='btn btn-neutral mt-10 ml-10' onClick={click}>Add</button>
            </div>
            <div className='bg-white mx-auto w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl mt-10'>
                {
                    arrObj.map((el,index) => (
                        <List key = {index} el = {el} index = {index} deleteObj = {deleteObj} updateObj = {updateObj}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ToDoList
