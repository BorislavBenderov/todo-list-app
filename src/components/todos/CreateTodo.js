import { addDoc, collection } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { database } from '../../firebaseConfig';

export const CreateTodo = () => {
    const [input, setInput] = useState('');
    const { loggedUser } = useContext(AuthContext);

    const onCreateTodo = (e) => {
        e.preventDefault();

        if (input === '') {
            alert('Please add valid todo!');
            return;
        }

        addDoc(collection(database, 'todos'), {
            title: input,
            uid: loggedUser.uid,
            checked: false
        })
            .then(() => {
                setInput('');
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    return (
        <section className="add__todo">
            <h1>ToDo App</h1>
            <form className="add__todo__form" onSubmit={onCreateTodo}>
                <label htmlFor="todo"></label>
                <input type="text" id="todo" name="todo" value={input} onChange={(e) => setInput(e.target.value)} />
                <button className="add__todo__btn">Add New Task</button>
            </form>
        </section>
    );
}