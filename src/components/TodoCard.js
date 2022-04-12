const TodoCard = ({ todo, index, changedTask, markTodo, removeTodo, editTodo, saveTodo }) => {
    return (
        <div className="flex items-center mt-4">
            <span className="mr-4" style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.task}</span>
            <div className="flex">
                <button style={{ borderColor: todo.isDone ? "green" : "#f4f4f4" }} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 border-2 hover:border-transparent rounded mr-4 w-10 h-10" onClick={() => markTodo(index)}>✓</button>{" "}
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 border-2 hover:border-transparent rounded mr-4 w-10 h-10" onClick={() => removeTodo(index)}>✕</button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 border-2 hover:border-transparent rounded mr-4 w-10 h-10" onClick={() => editTodo(index)}>Edit</button>
                <button className="bg-blue-300 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 border-2 hover:border-transparent rounded mr-4 w-10 h-10"
                    style={{ display: todo.task === changedTask.task && index === changedTask.index ? "block" : "none" }}
                    onClick={() => saveTodo(index, changedTask.task)}
                >Save</button>
            </div>
        </div>
    );
}
export default TodoCard;