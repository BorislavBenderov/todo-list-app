import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
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
        <a className="logout" href="" onClick={onLogout}>Logout</a>
    );
}