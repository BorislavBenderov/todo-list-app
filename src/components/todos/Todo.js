import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { database } from "../../firebaseConfig";
import { DeleteTodo } from "./DeleteTodo";

export const Todo = ({ todo, onEditHandler }) => {
    const [isChecked, setIsCkecked] = useState(todo.checked);

    const onChangeCheck = async () => {
        try {
            await updateDoc(doc(database, 'todos', todo.id), {
                checked: !todo.checked
            });
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="todo">
            <div className="todo__title">
                <p style={isChecked ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{todo.title}</p>
            </div>
            <div className="todos__btns">
                <label htmlFor="check"></label>
                <input type="checkbox"
                    name="check" id="check"
                    checked={isChecked}
                    onChange={() => setIsCkecked(!todo.checked)}
                    onClick={onChangeCheck}
                />
                <button onClick={() => onEditHandler(todo.id)}>x</button>
                <DeleteTodo todoId={todo.id} />
            </div>
        </div>
    );
}