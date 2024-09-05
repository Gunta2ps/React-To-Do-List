

function Navbar() {
  return (
    <div className="navbar bg-neutral text-neutral-content flex justify-evenly">
        <div>
            <button className="btn btn-ghost text-xl">To-Do List</button>
        </div>
        <div>
            <button className="btn btn-ghost text-xl">Home</button>
            <button className="btn btn-ghost text-xl">About</button>
            <button className="btn btn-ghost text-xl">Login</button>
        </div>
    </div>
  )
}

export default Navbar