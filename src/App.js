import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { Todos } from './components/todos/Todos';
import { UserContextProvider } from './contexts/UserContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <UserContextProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/todos' element={<Todos />} />
          </Routes>
        </UserContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
