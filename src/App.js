import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { Todos } from './components/todos/Todos';
import { TodoContextProvider } from './contexts/TodoContext';
import { Footer } from './components/footer/Footer';
import { NotFound } from './components/not-found/NotFound';
import { ProtectedRoutes } from './ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <TodoContextProvider>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route element={<ProtectedRoutes />}>
              <Route path='/todos' element={<Todos />} />
            </Route>
          </Routes>
          <Footer />
        </TodoContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
