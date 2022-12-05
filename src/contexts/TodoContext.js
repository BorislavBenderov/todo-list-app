import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { database } from "../firebaseConfig";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const q = query(collection(database, 'todos'), orderBy ("timestamp", "desc"))
        onSnapshot(q, (snapshot) => {
            setTodos(snapshot.docs.map((item) => {
                return { ...item.data(), id: item.id }
            }));
        })
    }, []);

    return (
        <TodoContext.Provider value={{ todos }}>
            {children}
        </TodoContext.Provider>
    );
}