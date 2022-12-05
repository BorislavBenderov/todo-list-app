import { DeleteTodo } from "./DeleteTodo";

export const Todo = ({ todo, onEditHandler }) => {
    return (
        <div className="todo">
            <div className="todo__title">
                <p>{todo.title}</p>
            </div>
            <div className="todos__btns">
                <label htmlFor="check"></label>
                <input type="checkbox" name="check" id="check" />
                <button onClick={() => onEditHandler(todo.id)}>x</button>
                <DeleteTodo todoId={todo.id}/>
            </div>
        </div>
    );
}