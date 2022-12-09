import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { database } from '../../firebaseConfig';

export const CreateTodo = () => {
    const [err, setErr] = useState('');
    const [input, setInput] = useState('');
    const { loggedUser } = useContext(AuthContext);

    const onCreateTodo = (e) => {
        e.preventDefault();

        if (input === '') {
            setErr('Please add valid todo!');
            return;
        }

        if (input.length > 25) {
            setErr('Todo must be less then 25 characters!');
            return;
        }

        addDoc(collection(database, 'todos'), {
            title: input,
            uid: loggedUser.uid,
            checked: false,
            timestamp: serverTimestamp()
        })
            .then(() => {
                setInput('');
            })
            .catch((err) => {
                setErr(err.message);
            })
    }

    return (
        <section className="add__todo">
            <h1>ToDo App</h1>
            <form className="add__todo__form" onSubmit={onCreateTodo}>
                <label htmlFor="todo"></label>
                <input type="text"
                    id="todo"
                    name="todo"
                    placeholder='Add todo'
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <button className="add__todo__btn">Add New Task</button>
                <p className="errors">{err}</p>
            </form>
        </section>
    );
}