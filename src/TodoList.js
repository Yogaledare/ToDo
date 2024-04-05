import {useState} from 'react';
import {TodoItem} from "./TodoItem";

const TodoList = ({todos}) => {
    // const [todos, setTodos] = useState([]);


    return (
        <div className={'list-group'}>
            {todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}>
                        toggleComplete={'hi'}
                        removeItem={'hi'}
                    </TodoItem>
                )

            })}


            {/*{todos.map(todo => {*/}
            {/*        return (*/}
            {/*            <div key={todo.id} className={`list-group-item ${todo.completed ? 'list-group-item-success' : ''}`}>*/}
            {/*                {todo.text}*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    }*/}
            {/*)}*/}

        </div>
    );
};

export default TodoList;
