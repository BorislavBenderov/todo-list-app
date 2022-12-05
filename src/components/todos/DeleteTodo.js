import { deleteDoc, doc } from "firebase/firestore";
import { database } from "../../firebaseConfig";

export const DeleteTodo = ({ todoId }) => {
    const onDeleteTodo = async () => {
        await deleteDoc(doc(database, 'todos', todoId));
    }

    return (
        <button onClick={onDeleteTodo}>x</button>
    );
}