import {TodoItem} from "./TodoItem";

const TodoList = ({todos, toggleComplete, removeItem}) => {
    return (
        <div className={'list-group'}>
            {todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleComplete={toggleComplete}
                        removeItem={removeItem}
                    >
                    </TodoItem>
                )
            })}
        </div>
    );
};

export default TodoList;
