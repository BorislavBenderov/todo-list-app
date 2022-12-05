import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";

export const Logout = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    return (
        <Link className="logout" to="#" onClick={onLogout}>
            <i className="fa fa-sign-out fa-lg" aria-hidden="true"></i>
        </Link>
    );
}