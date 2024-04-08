import 'bootstrap-icons/font/bootstrap-icons.css'

export const TodoItem = ({todo, toggleComplete, removeItem}) => {
    return (
        <div className={`list-group-item ${todo.completed ? 'bg-dark-subtle' : ''}`}>
            <div className={'d-flex justify-content-between align-items-center'}>
                <div className={'me-auto pe-3'} style={{maxWidth: '80%'}}>
                    <div className={`${todo.completed ? 'text-decoration-line-through ' : ''}`}>
                        {todo.text}
                    </div>
                </div>
                <div>
                    <button 
                        onClick={() => toggleComplete(todo.id)} 
                        className={`btn btn-outline-success me-3 ${todo.completed ? 'bg-success': ''}`}>
                        <i className={`bi text-white bi-check-lg `}></i>
                    </button>

                    <button onClick={() => removeItem(todo.id)} className={'btn btn-danger'}>
                        <i className={'bi bi-trash'}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

// <i className={`bi text-white ${todo.completed ? 'bi-check-lg ' : 'bi-check-lg'} `}></i>
