import 'bootstrap-icons/font/bootstrap-icons.css'

const ControlPanel = ({undoTodo, removeAll}) => {
    return (
        <div className={'d-flex justify-content-end my-3'}>
            <button
                onClick={undoTodo}
                className={'btn btn-warning me-3'}
            >
                Undo Last
            </button>

            <button
                onClick={removeAll}
                className={'btn btn-danger'}
            >
                <i className={'bi bi-trash'}></i>
                (All)
            </button>


        </div>
    );
};

export default ControlPanel;
