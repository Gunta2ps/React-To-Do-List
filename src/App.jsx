import Navbar from "./components/Navbar"
import ToDoList from "./components/ToDoList"

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer/>
      <Navbar/>
      <ToDoList/>
    </>
  )
}

export default App
