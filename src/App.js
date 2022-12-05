import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { Todos } from './components/todos/Todos';
import { TodoContextProvider } from './contexts/TodoContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
          <TodoContextProvider>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/todos' element={<Todos />} />
            </Routes>
          </TodoContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
