import { Logout } from "../auth/Logout";
import { CreateTodo } from "./CreateTodo";

export const Todos = () => {
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
                <div className="todo">
                    <div className="todo__title">
                        <p>Hello World</p>
                    </div>
                    <div className="todos__btns">
                        <label htmlFor="check"></label>
                        <input type="checkbox" name="check" id="check" />
                        <button>x</button>
                        <button>x</button>
                    </div>
                </div>
                <div className="todo">
                    <div className="todo__title">
                        <p>Hello World</p>
                    </div>
                    <div className="todos__btns">
                        <label htmlFor="check"></label>
                        <input type="checkbox" name="check" id="check" />
                        <button>x</button>
                        <button>x</button>
                    </div>
                </div>
            </section >
            <section className="delete__tasks">
                <button>Delete done tasks</button>
                <button>Delete all tasks</button>
            </section>
        </div >
    );
}