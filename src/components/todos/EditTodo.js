import { doc, updateDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { database } from "../../firebaseConfig";

export const EditTodo = ({ todoId, successfulEdit }) => {
    const { todos } = useContext(TodoContext);
    const currentTodo = todos.find(todo => todo.id === todoId);
    const [input, setInput] = useState(currentTodo.title);

    useEffect(() => {
        setInput(currentTodo.title)
    }, [todoId]);

    const onEditTodo = (e) => {
        e.preventDefault();

        if (input === '') {
            alert('Please add valid todo!');
            return;
        }

        updateDoc(doc(database, 'todos', todoId), {
            title: input
        })
            .then(() => {
                successfulEdit();
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    return (
        <section className="add__todo">
            <h1>ToDo App</h1>
            <form className="add__todo__form" onSubmit={onEditTodo}>
                <label htmlFor="todo"></label>
                <input type="text"
                    id="todo"
                    name="todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <button className="add__todo__btn">Edit Task</button>
            </form>
        </section>
    );
}