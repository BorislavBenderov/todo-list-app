import { Link } from "react-router-dom";
import { browserLocalPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

export const Login = () => {
    const onLogin = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');

        if (email === '' || password === '') {
            alert('Please fill all the fields!');
            return;
        }

        setPersistence(auth, browserLocalPersistence)
            .then(() => {
                signInWithEmailAndPassword(auth, email, password)
                    .then(() => {
                        console.log('ok');
                    })
                    .catch((err) => {
                        alert(err.message);
                    })
            })
    }

    return (
        <div className="auth">
            <div className="auth__container">
                <h1>ToDo List</h1>
                <form className="auth__form" onSubmit={onLogin}>
                    <label htmlFor="email" />
                    <input type="text" placeholder="Email" id="email" name="email" />
                    <label htmlFor="password" />
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                    />
                    <button type="submit">Log In</button>
                </form>
            </div>
            <div className="auth__action">
                <p>Don't have an account?</p>
                <Link to="/register">Sign up</Link>
            </div>
        </div>
    );
}