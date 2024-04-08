import {useState} from "react";


const AddTodoForm = ({addTodo}) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText('');
    }


    return (
        <form onSubmit={handleSubmit} className={'mb-3 d-flex'}>
            <input
                type="text"
                className={'form-control me-2'}
                placeholder="Add a new todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                type="submit"
                className={'btn btn-primary'}
            > Add
            </button>
        </form>
    )
}

export default AddTodoForm; 