import './App.css';
import TodoList from './TodoList';
import {useState} from "react";
import AddTodoForm from "./AddTodoForm";
import ControlPanel from "./ControlPanel";

function App() {
    const [todos, setTodos] = useState([
        {id: 1, text: "Socker", completed: false},
        {id: 2, text: "Knäckebröd", completed: true},
        {id: 3, text: "Choklad", completed: false},
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
    
    
    const undoTodo = () => {
        let updated = todos.slice(0, -1);
        setTodos(updated);
    }
    
    
    const removeAll = () => {
        setTodos([]); 
    }
    
    return (
        <div className='container mt-5'>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <header className='my-5 '>
                        <h1 className={'text-center'}>ReToDo</h1>
                    </header>

                    <AddTodoForm
                        addTodo={addTodo}
                    ></AddTodoForm>
                    <TodoList todos={todos} toggleComplete={toggleComplete} removeItem={removeItem}></TodoList>
                    <ControlPanel
                        undoTodo={undoTodo}
                        removeAll={removeAll}
                    ></ControlPanel>
                </div>
            </div>
        </div>
    );
}

export default App;
