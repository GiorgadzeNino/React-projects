const TodoCard = ({ todo, index, changedTask, markTodo, removeTodo, editTodo, saveTodo }) => {
    return (
        <div className="flex items-center mt-4">
            <button style={{ borderColor: todo.isDone ? "green" : "#A9A9A9" }} className="bg-transparent text-blue-700 font-semibold hover:text-white py-2 px-4 border  border-2 hover:border-transparent rounded mr-4 w-10 h-10" onClick={() => markTodo(index)}>
                <span style={{ display: todo.isDone ? "block" : "none" }}>✓</span>
            </button>

            <span className="mr-4" style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.task}</span>
            <div className="flex">
                <button className="bg-transparent text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 border-2 hover:border-transparent rounded mr-4 w-10 h-10 bg-red-200" onClick={() => removeTodo(index)}>✕</button>
                <button className="bg-transparent text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 border-2 hover:border-transparent rounded mr-4 w-10 h-10 bg-orange-200" onClick={() => editTodo(index)}>Edit</button>
                <button className="text-blue-700 font-semibold hover:text-white py-2 px-4 border border-2 hover:border-transparent rounded mr-4 w-10 h-10 bg-green-200"
                    style={{ display: todo.task === changedTask.task && index === changedTask.index ? "block" : "none" }}
                    onClick={() => saveTodo(index, changedTask.task)}
                >Save</button>
            </div>
        </div>
    );
}
export default TodoCard;