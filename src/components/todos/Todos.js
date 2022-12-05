import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { TodoContext } from '../../contexts/TodoContext';
import { Logout } from "../auth/Logout";
import { CreateTodo } from "./CreateTodo";
import { EditTodo } from "./EditTodo";
import { Todo } from "./Todo";

export const Todos = () => {
    const { todos } = useContext(TodoContext);
    const { loggedUser } = useContext(AuthContext);
    const [create, setCreate] = useState(true);
    const [id, setId] = useState('');
    const [currentTodos, setCurrentTodos] = useState(todos.filter(todo => todo.uid === loggedUser?.uid));

    const onEditHandler = (todoId) => {
        setCreate(false);
        setId(todoId);
    }

    const successfulEdit = () => {
        setCreate(true);
    }

    const allTodos = () => {
        setCurrentTodos(todos.filter(todo => todo.uid === loggedUser?.uid))
    }

    const doneTodos = () => {
        setCurrentTodos(todos.filter(todo => todo.uid === loggedUser?.uid && todo.checked === true));
    }

    const notFinishedTodos = () => {
        setCurrentTodos(todos.filter(todo => todo.uid === loggedUser?.uid && todo.checked === false));
    }

    return (
        <div className="todos">
            <Logout />
            {create ? <CreateTodo /> : <EditTodo todoId={id} successfulEdit={successfulEdit} />}
            <section className="todolist">
                <h1>ToDo List</h1>
                <div className="todolist__btns">
                    <button onClick={allTodos}>All</button>
                    <button onClick={doneTodos}>Done</button>
                    <button onClick={notFinishedTodos}>Todo</button>
                </div>
            </section>
            <section className="todos__container">
                {currentTodos.length > 0
                ? currentTodos.map(todo => <Todo key={todo.id} todo={todo} onEditHandler={onEditHandler} />)
            : <p>No todos here!</p>}
            </section >
            <section className="delete__tasks">
                <button>Delete done tasks</button>
                <button>Delete all tasks</button>
            </section>
        </div >
    );
}