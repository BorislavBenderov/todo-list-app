import { deleteDoc, doc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { TodoContext } from "../../contexts/TodoContext";
import { database } from "../../firebaseConfig";

export const DeleteTasks = () => {
    const { todos } = useContext(TodoContext);
    const { loggedUser } = useContext(AuthContext);

    const allTasks = todos.filter(todo => todo.uid === loggedUser?.uid);
    const allIds = allTasks.map((todo) => {
        return todo.id
    });

    const doneTasks = todos.filter(todo => todo.uid === loggedUser?.uid && todo.checked === true);
    const doneIds = doneTasks.map((todo) => {
        return todo.id
    });

    const deleteDoneTasks = async () => {
        try {
            for (let id of doneIds) {
                await deleteDoc(doc(database, 'todos', id));
            }
        } catch (error) {
            alert(error.message)
        }

    }

    const deleteAllTasks = async () => {
        try {
            for (let id of allIds) {
                await deleteDoc(doc(database, 'todos', id));
            }
        } catch (error) {
            alert(error.message);
        }
        
    }

    return (
        <section className="delete__tasks">
            <button onClick={deleteDoneTasks}>Delete done tasks</button>
            <button onClick={deleteAllTasks}>Delete all tasks</button>
        </section>
    );
}