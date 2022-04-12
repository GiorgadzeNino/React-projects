import { useState } from "react";
import TodoCard from "./TodoCard";

const Todo = () => {


    // დავალება:
    // დაამატეთ ფუნქციონალი, თითოეული თასქი შესრულებულია თუ არა.
    // ანუ დიფოლტად როცა დავამატებ მე თასქს, ის უნდა იყოს შეუსრულებელი და როდესაც მასზე დავაჭერ, უნდა შესრულდეს
    // შესრულდეს ნიშნავს გამწვნადეს, ან ხაზი გადაესვას ან რამე ამდაგვარი.

    // მინიშნება. მასივში მარტივი სტრინგის ნაცვლად, რამდენიმე keyს მქონე ობიექტები უნდა ჩაწეროთ.
    const [changedTask, setChangedTask] = useState('');
    const [userInput, setUserInput] = useState('')
    const [todoList, setTodoList] = useState(
        [
            { isDone: false, task: 'Study ReactJS', },
            { isDone: false, task: 'Study Algorithms' },
            { isDone: false, task: 'Clean House' }
        ]
    )

    const handleInput = (e) => {
        setUserInput(e.target.value)
    }

    const handleAddTodo = text => {
        console.log(text)
        if (text) {
            const newTodos = [...todoList, { isDone: false, task: text }];
            setTodoList(newTodos);
            setUserInput('');
            setChangedTask('');
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodoList = [...todoList]
        newTodoList.splice(index, 1)
        setTodoList(newTodoList)
    }
    const handleMarkTodo = index => {
        const newTodos = [...todoList];
        newTodos[index].isDone = !newTodos[index].isDone;
        setTodoList(newTodos);
    };

    const handleEditTodo = index => {
        setUserInput(todoList[index].task);
        setChangedTask({ index: index, task: todoList[index].task });
    }

    const handleSaveTodo = index => {
        setTodoList(prev => prev.map(item => (todoList[index].task === item.task && todoList[index].task !== userInput ? { isDone: false, task: userInput } : item)));
        setUserInput('');
        setChangedTask('');
    }
    return (
        <div>
            <div className='flex w-80'>
                <input
                    value={userInput}
                    onChange={(e) => handleInput(e)}
                    className='shadow appearance-outline border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
                <button
                    onClick={() => handleAddTodo(userInput)}
                    className='mx-4 text-white font-bold px-4 rounded bg-slate-500'>
                    Add Todo
                </button>

            </div>
            {todoList.map((todo, index) => (
                <TodoCard
                    key={index}
                    index={index}
                    todo={todo}
                    changedTask={changedTask}
                    markTodo={handleMarkTodo}
                    removeTodo={handleDeleteTodo}
                    editTodo={() => handleEditTodo(index)}
                    saveTodo={() => handleSaveTodo(index)}
                />
            ))}
        </div>
    )
}

export default Todo;