import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    try {
      const todoString = localStorage.getItem("todos")
      if (todoString) {
        const parsedTodos = JSON.parse(todoString)
        setTodos(parsedTodos)
      }
    } catch (error) {
      console.error("Error loading todos:", error)
      toast.error("Failed to load todos")
    }
  }, [])

  useEffect(() => {
    if (todos.length > 0) {
      saveToLS()
    }
  }, [todos])

  const saveToLS = () => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos))
    } catch (error) {
      console.error("Error saving todos:", error)
      toast.error("Failed to save todos")
    }
  }

  const toggleFinished = () => {
    setShowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    const todoToEdit = todos.find(i => i.id === id)
    if (todoToEdit) {
      setTodo(todoToEdit.todo)
      setTodos(todos.filter(item => item.id !== id))
      toast.info("Editing todo...")
    }
  }

  const handleDelete = (e, id) => {
    setTodos(todos.filter(item => item.id !== id))
    toast.success("Todo deleted successfully!")
  }

  const handleAdd = () => {
    if (todo.trim().length <= 3) {
      toast.warning("Todo must be more than 3 characters!")
      return
    }
    
    setTodos([...todos, { 
      id: uuidv4(), 
      todo: todo.trim(), 
      isCompleted: false,
    }])
    setTodo("")
    toast.success("Todo added successfully!")
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    const id = e.target.name
    setTodos(todos.map(item => 
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    ))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && todo.trim().length > 3) {
      handleAdd()
    }
  }

  const filteredTodos = todos.filter(item => showFinished || !item.isCompleted)

  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[35%] shadow-lg">
        <h1 className='font-bold text-center text-3xl text-violet-800 mb-8'>iTask - Smart Todo Manager</h1>
        
        <div className="addTodo my-5 flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md">
          <h2 className='text-2xl font-bold text-violet-700'>Add a Todo</h2>
          <div className="flex gap-2">
            <input 
              onChange={handleChange} 
              onKeyPress={handleKeyPress}
              value={todo} 
              type="text" 
              placeholder="Enter your todo here..."
              className='flex-1 rounded-full px-5 py-2 border-2 border-violet-200 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200' 
            />
            <button 
              onClick={handleAdd} 
              disabled={todo.trim().length <= 3} 
              className='bg-violet-600 px-6 py-2 rounded-full hover:bg-violet-700 disabled:bg-violet-300 disabled:cursor-not-allowed text-sm font-bold text-white transition-all duration-200 whitespace-nowrap'
            >
              Add Todo
            </button>
          </div>
        </div>

        <div className="filter-section flex items-center justify-between my-6 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center">
            <input 
              className='w-5 h-5 accent-violet-600' 
              id='show' 
              onChange={toggleFinished} 
              type="checkbox" 
              checked={showFinished} 
            />
            <label className='mx-2 text-violet-700 font-medium cursor-pointer' htmlFor="show">
              Show Completed Todos
            </label>
          </div>
          <span className="text-sm text-gray-500">
            {filteredTodos.length} of {todos.length} todos
          </span>
        </div>

        <div className='h-[2px] bg-violet-200 w-full my-4'></div>

        <h2 className='text-2xl font-bold text-violet-700 mb-4'>Your Todos</h2>
        <div className="todos space-y-3">
          {filteredTodos.length === 0 && todos.length === 0 && 
            <div className='text-center p-8 bg-white rounded-lg text-gray-500'>
              <div className="text-4xl mb-4">📝</div>
              <p className="text-lg font-medium">No todos yet</p>
              <p className="text-sm">Add some tasks to get started!</p>
            </div>
          }
          {filteredTodos.length === 0 && todos.length > 0 && 
            <div className='text-center p-8 bg-white rounded-lg text-gray-500'>
              <div className="text-4xl mb-4">✅</div>
              <p className="text-lg font-medium">No todos to show</p>
              <p className="text-sm">All completed todos are hidden</p>
            </div>
          }
          {filteredTodos.map(item => (
            <div key={item.id} className="todo flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
              <div className='flex items-center gap-4 flex-1 min-w-0'>
                <input 
                  name={item.id} 
                  onChange={handleCheckbox} 
                  type="checkbox" 
                  checked={item.isCompleted}
                  className="w-5 h-5 accent-violet-600 flex-shrink-0" 
                />
                <div className={`${item.isCompleted ? "line-through text-gray-500" : "text-gray-800"} break-words flex-1`}>
                  {item.todo}
                </div>
              </div>
              <div className="buttons flex gap-2 flex-shrink-0 ml-4">
                <button 
                  onClick={(e) => handleEdit(e, item.id)} 
                  className='bg-violet-600 hover:bg-violet-700 p-2 text-white rounded-lg transition-colors duration-200 disabled:opacity-50'
                  disabled={item.isCompleted}
                  title={item.isCompleted ? "Cannot edit completed todo" : "Edit todo"}
                >
                  <FaEdit />
                </button>
                <button 
                  onClick={(e) => handleDelete(e, item.id)} 
                  className='bg-red-500 hover:bg-red-600 p-2 text-white rounded-lg transition-colors duration-200'
                  title="Delete todo"
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App


