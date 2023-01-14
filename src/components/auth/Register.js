import { browserLocalPersistence, createUserWithEmailAndPassword, setPersistence } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, database } from "../../firebaseConfig";

export const Register = () => {
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onRegister = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const repeatPassword = formData.get('repeatPassword');

        if (email === '' || password === '' || repeatPassword === '') {
            setErr('Please fill all fields!');
            return;
        }

        if (password !== repeatPassword) {
            setErr('Password and confirmation password dont match');
            return;
        }

        setLoading(true);
        setPersistence(auth, browserLocalPersistence)
            .then(() => {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((res) => {
                        setDoc(doc(database, 'users', res.user.uid), {
                            email,
                            uid: res.user.uid
                        });
                        navigate('/todos');
                        setLoading(false);
                    })
                    .catch((err) => {
                        setErr(err.message);
                        setLoading(false);
                    })
            })
    }

    return (
        <div className="auth">
            <div className="auth__container">
                <h1>ToDo List</h1>
                <form className="auth__form" onSubmit={onRegister}>
                    <label htmlFor="email" />
                    <input type="text" placeholder="Email" id="email" name="email" />
                    <label htmlFor="password" />
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                    />
                    <label htmlFor="repeatPassword" />
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        id="repeatPassword"
                        name="repeatPassword"
                    />
                    <button type="submit">{loading ? "Loading..." : "Register"}</button>
                    <p className="errors">{err}</p>
                </form>
            </div>
            <div className="auth__action">
                <p>Have an account?</p>
                <Link to="/">Log in</Link>
            </div>
        </div>
    );
}