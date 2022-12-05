import { createContext, useEffect, useState } from "react";
import { collection, onSnapshot } from 'firebase/firestore';
import { database } from '../firebaseConfig';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        onSnapshot(collection(database, 'users'), (snapshot) => {
            setUsers(snapshot.docs.map((item) => {
                return { ...item.data(), id: item.id }
            }))
        })
    }, []);

    return (
        <UserContext.Provider value={{ users }}>
            {children}
        </UserContext.Provider>
    );
}