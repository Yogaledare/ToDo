import './App.css';
import TodoList from './TodoList';
import {useState} from "react";
import AddTodoForm from "./AddTodoForm";

function App() {


    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Finish React tutorial Finish React tutorial Finish React tutorial Finish React tutorial Finish React tutorial Finish React tutorial Finish React tutorial Finish React tutorial Finish React tutorial",
            completed: false
        },
        {id: 2, text: "Grocery shopping", completed: true},
        {id: 3, text: "Call Mom", completed: false},
    ]);
    
    
    
    const toggleComplete = (id) => {
        let updated = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed}; 
            }
            
            return todo; 
        })
        
        setTodos(updated); 
    }
    
    
    const removeItem = (id) => {
        let updated = todos.filter(todo => todo.id !== id);
        setTodos(updated); 
    }
    
    
    const addTodo = (text) => {
        let t = {id: Date.now(), text: text, completed: false};
        setTodos([...todos, t]); 
    }


    return (
        <div className='container mt-5'>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <header className='mt-5 '>
                        <h1 className={'text-center'}>Hello World</h1>
                        <p> this is a header</p>
                    </header>

                    <AddTodoForm
                        addTodo={addTodo}
                    ></AddTodoForm>
                    <TodoList todos={todos} toggleComplete={toggleComplete} removeItem={removeItem}></TodoList>
                </div>
            </div>
        </div>
    );
}

export default App;
