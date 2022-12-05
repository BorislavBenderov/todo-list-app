import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div className="auth">
            <div className="auth__container">
                <h1>ToDo List</h1>
                <form className="auth__form">
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