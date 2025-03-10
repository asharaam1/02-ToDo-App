import { useRef, useState } from 'react'
import './App.css'

function App() {
  const title = useRef();
  const [todos, setTodos] = useState([]);

  function addTodo(event) {
    event.preventDefault();

    if (title.current.value.trim() === '') {
      alert("Write something...!")
      return
    }

    todos.push({
      title: title.current.value,
      id: Date.now()
    })
    setTodos([...todos])

    // setTodos([...todos, { title: title.current.value, id: Date.now() }])  //! Another Method
    title.current.value = ''
  }

  const deleteTodo = (index) => {
    todos.splice(index, 1);
    setTodos([...todos])
  }

  const editTodo = (index) => {
    const updatedVal = prompt('Kindly enter the revised to-do item.')
    if (updatedVal.trim() === '') {
      alert('Please write something...!');
      return;
    }
    todos[index].title = updatedVal
    setTodos([...todos])
  }

  return (
    <>
      <div className="main">
        <div className="center-box">

          <div className="box-1">
            <h1>ToDo App</h1>
            <p>keep it up!</p>
          </div>

          <form className="box-2-inputs" onSubmit={addTodo}>
            <input ref={title} type="text" id="inputs" placeholder="Write Your Tasks" />
            <button id="add" > + </button>
          </form>

          <div className="box-3-lists">
            <ul id="list">
              {todos.length > 0 ? todos.map((item, index) => {
                return (
                  <li key={item.id} id='li'>
                    {item.title} <br />
                    <div>
                      <button className='edit1' onClick={() => deleteTodo(index)}>delete</button>
                      <button className='edit2' onClick={() => editTodo(index)}>edit</button>
                    </div>
                  </li>
                )
              }) : <h3 style={{ margin: '10px' }}>No Item Found...</h3>
              }
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
