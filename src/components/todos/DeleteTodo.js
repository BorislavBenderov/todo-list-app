import { deleteDoc, doc } from "firebase/firestore";
import { database } from "../../firebaseConfig";

export const DeleteTodo = ({ todoId }) => {
    const onDeleteTodo = async () => {
        try {
            await deleteDoc(doc(database, 'todos', todoId));
        } catch (error) {
            alert(error.message);
        }

    }

    return (
        <i className="fa fa-trash" aria-hidden="true" onClick={onDeleteTodo}></i>
    );
}