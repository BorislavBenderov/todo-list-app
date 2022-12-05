export const Register = () => {
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
                    <label htmlFor="repeatPassword" />
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        id="repeatPassword"
                        name="repeatPassword"
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
            <div className="auth__action">
                <p>Have an account?</p>
                <a href="/">Log in</a>
            </div>
        </div>
    );
}