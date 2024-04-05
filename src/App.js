import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import {useState} from "react";

function App() {



    const [todos, setTodos] = useState([
        { id: 1, text: "Finish React tutorial", completed: false },
        { id: 2, text: "Grocery shopping", completed: true },
        { id: 3, text: "Call Mom", completed: false },
        
        
    ]);
    
    
    
    return (
        <div className='container mt-5'>
            <header className='mt-5 '>
                <h1 className={'text-center'}>Hello World</h1>
                <p> this is a header</p>
            </header>

            <TodoList todos={todos}></TodoList>
        </div>
    );
}

export default App;
