import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { TodoContext } from '../../contexts/TodoContext';
import { Logout } from "../auth/Logout";
import { CreateTodo } from "./CreateTodo";
import { Todo } from "./Todo";

export const Todos = () => {
    const { todos } = useContext(TodoContext);
    const { loggedUser } = useContext(AuthContext);

    const currentUserTodos = todos.filter(todo => todo.uid === loggedUser?.uid);

    return (
        <div className="todos">
            <Logout />
            <CreateTodo />
            <section className="todolist">
                <h1>ToDo List</h1>
                <div className="todolist__btns">
                    <button>All</button>
                    <button>Done</button>
                    <button>Todo</button>
                </div>
            </section>
            <section className="todos__container">
                {currentUserTodos.map(todo => <Todo key={todo.id} todo={todo} />)}
            </section >
            <section className="delete__tasks">
                <button>Delete done tasks</button>
                <button>Delete all tasks</button>
            </section>
        </div >
    );
}