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

    const currentUserTodos = todos.filter(todo => todo.uid === loggedUser?.uid);

    const onEditHandler = (todoId) => {
        setCreate(false);
        setId(todoId);
    }

    const successfulEdit = () => {
        setCreate(true);
    }

    return (
        <div className="todos">
            <Logout />
            {create ? <CreateTodo /> : <EditTodo todoId={id} successfulEdit={successfulEdit}/>}
            <section className="todolist">
                <h1>ToDo List</h1>
                <div className="todolist__btns">
                    <button>All</button>
                    <button>Done</button>
                    <button>Todo</button>
                </div>
            </section>
            <section className="todos__container">
                {currentUserTodos.map(todo => <Todo key={todo.id} todo={todo} onEditHandler={onEditHandler} />)}
            </section >
            <section className="delete__tasks">
                <button>Delete done tasks</button>
                <button>Delete all tasks</button>
            </section>
        </div >
    );
}